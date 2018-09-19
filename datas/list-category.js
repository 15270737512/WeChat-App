module.exports = [
  {
    cate_id: 1,
    cate_name: "护肤",
    ishaveChild: true,
    children:
      [
        {
          parent_id:1,
          child_id: 1,
          name: '洁面皂',
        
        },
        {
          parent_id: 1,
          child_id: 2,
          name: '卸妆',

        },
        {
          parent_id: 1,
          child_id: 3,
          name: '洁面乳',
        },
        {
          parent_id: 1,
          child_id: 4,
          name: '面部祛角质',
        }
      ]
  },
  {
    cate_id: 2,
    cate_name: "彩妆",
    ishaveChild: true,
    children:
      [
        {
          parent_id: 2,
          child_id: 1,
          name: '气垫bb',
        },
        {
          parent_id: 2,
          child_id: 2,
          name: '修容/高光',
        },
        {
          parent_id: 2,
          child_id: 3,
          name: '遮瑕',
        },
        {
          parent_id: 2,
          child_id: 4,
          name: '腮红',
        },
        {
          parent_id: 2,
          child_id: 5,
          name: '粉饼',
        },
        {
          parent_id: 2,
          child_id: 6,
          name: '粉底',
        },
        {
          parent_id: 2,
          child_id: 7,
          name: '蜜粉/散粉',
        },
        {
          parent_id: 2,
          child_id: 8,
          name: '隔离霜',
        }
      ]
  },
  {
    cate_id: 3,
    cate_name: "香水/香氛",
    ishaveChild: true,
    children:
      [
        {
          parent_id: 3,
          child_id: 1,
          name: '淡香水EDT',
        },
        {
          parent_id: 3,
          child_id: 2,
          name: '浓香水EDP',
        },
        {
          parent_id: 3,
          child_id: 3,
          name: '香体走珠',
        },
        {
          parent_id: 3,
          child_id: 4,
          name: '古龙香水男士的最爱',
        }
      ]
  },
  {
    cate_id: 4,
    cate_name: "个人护理",
    ishaveChild: false,
    children: []
  }, {
    cate_id: 5,
    cate_name: "测试数据",
    ishaveChild: false,
    children: []
  }, {
    cate_id: 6,
    cate_name: "测试数据",
    ishaveChild: false,
    children: []
  }, {
    cate_id: 7,
    cate_name: "测试数据",
    ishaveChild: false,
    children: []
  }, {
    cate_id: 8,
    cate_name: "测试数据",
    ishaveChild: false,
    children: []
  }
];
