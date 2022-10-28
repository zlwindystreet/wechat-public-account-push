/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'server-chan',
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',
  
  province: '',
      // 所在城市或县区
      city: '北京',

  

  USERS: [
    {
      // 想要发送的人的名字
      name: '小文裕',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // 使用其他通道时，请严格按照各个通道的教程进行填写
      id: 'SCT178815TwZ2YW4rcskKlNAvLQF1i5qlb',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id
      useTemplateId: '0001',
      // 所在省份或城市，也可以不填
    
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '08-01',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://astro.sina.com.cn/fate_day_leo/',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日',name: '小文裕', year: '1998', date: '08-01',
        },
      ],
   },
 ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
      useTemplateId: 'oL7FTtUcRVEME46UvpJJ0Uu2fWSG50pVhRh8FmtAofE',
  CALLBACK_TEMPLATE_ID: 'oL7FTtUcRVEME46UvpJJ0Uu2fWSG50pVhRh8FmtAofE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVEqa5mXsU-iUzSNjZZJJoxJPtxM',
    }
  ],

}

module.exports = USER_CONFIG
