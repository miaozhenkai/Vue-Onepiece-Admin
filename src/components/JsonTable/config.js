//import request from '@/server/request';

import request from "@/request/index";

import {tableData} from './tableDataMock';
export const searchColumns = [
    {
        label: '姓名',
        prop: 'name',
        clearable: true,
        placeholder: "请输入姓名"
    },
    {
        label: '性别',
        prop: 'sex',
        clearable: true,
        placeholder: "性别",
        isSelect: true,
        options: [
            {
                prop: 'male',
                name: '男'
            },
            {
                prop: 'female',
                name: '女'
            }
        ]
    },
    {
        label: '技能',
        prop: 'skill',
        clearable: true,
        placeholder: "请选择",
        isCascader: true,
        options: [
              {
                value: "basic",
                label: "Basic",
                children: [
                {
                    value: "layout",
                    label: "Layout 布局"
                },
                {
                    value: "color",
                    label: "Color 色彩"
                },
                {
                    value: "typography",
                    label: "Typography 字体"
                },
                {
                    value: "icon",
                    label: "Icon 图标"
                },
                {
                    value: "button",
                    label: "Button 按钮"
                }
                ]
            }
        ]
    },
    {
        label: '出生日期',
        prop: 'born',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'date'
    },
    {
        label: '工作日期',
        prop: 'working',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'datetimerange'
    }
];

export const tableColumns = [
    {
        prop: 'accessTime',
        label: '访问时间',
        width: 150,
        overflow: true
    },
    {
        prop: 'ipAddress',
        label: 'ip',
        width: 150,
        overflow: true
    },
  {   // 场景： 后端字段是数字0或1, 前端需要自己将数字转成汉字 比如0 待审核 1 已审核
    prop: 'isAllow',
    label: '是否允许',
    width: 150,
    overflow: true,
    expandFunc: true,
    isMultiCell: true,
    render: (scope) => {
      let status = scope.row.status;
      if( status) {
        return "是";
      } else if(!status) {
        return "否";
      }
      return "--";
    }
  },
    {
        prop: 'requestUrl',
        label: '请求地址',
        width: 150,
        overflow: true
    },
    {
        prop: 'httpMethod',
        label: '请求方式',
        width: 150,
        overflow: true
    }

];

export const localService = {
/**
 * {
 *  page: 1,
 *  psize: 20,
 *  params: {}
 * }
 */
    get(data) {
  // return axios.get(url, data);
         return request.post("http://localhost:8085/ip/ipAccessLog", {_page: data.page, _limit: data.psize}); // 这里是实际发请求的地方
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(tableData);
        //     }, 1000);
        // });
    }
};

export const options = {
    canCheck: true, // 是否可选择
    hasIndex: true, // 是否有序号
    checkFixed: 'left', // 选择固定位置
    indexFixed: 'left', // 表序号固定位置
    opW: 150,// 操作栏宽度
    autoRequest: true, // 自动请求
    startUpdate: Date.now()
};

// 以上配置文件可以根据业务需要分布配置在不同的文件里
