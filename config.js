const config = {
  encoding: "UTF-8",
  max_number: 34,// 每个时间节点最多显示的条目数。
  showMessage: true,// 控制是否显示顶部附加信息文字。
  auto_sort: false,
  timeFormat: "%Y-%m-%d",// 时间格式化
  reverse: false,// 倒序，使得最短的条位于最上方
  divide_by: "name",// 类型根据什么字段区分？如果是name，则关闭类型显示
  divide_color_by: "name",// 颜色根据什么字段区分？
  // 字段的值与其对应的颜色值
  color: {
    Chinese: "#1177CC",
    Japanese: "#667788"
  },
  changeable_color: false,// 颜色渐变：颜色绑定增长率
  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],
  itemLabel: "疫情可视化",//左侧文字
  typeLabel: "现存确诊人数(注:不包含湖北)", //右侧文字
  item_x: 950,// 榜首项目信息的水平位置 。
  interval_time: 0.5,// 时间点间隔时间。
  text_y: -50,// 上方文字水平高度。
  text_x: 180,// 右侧文字横坐标
  offset: 350,// 偏移量
  display_barInfo: 0,// 长度小于display_barInfo的bar将不显示barInfo。
  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  step: 1, // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  format: ",.0f",
  postfix: "", // 后缀
  deformat: function(val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  // 图表左右上下间距。
  // 注意，left_margin不包括左侧的label，修改数值较小会导致左侧label不显示
  left_margin: 120,
  right_margin: 50,
  top_margin: 100,
  bottom_margin: 0,
  dateLabel_switch: true, // 是否开启时间标签。
  // 时间标签坐标。建议x：1000 y：-50开始尝试，默认位置为x:null,y:null
  dateLabel_x: 450,
  dateLabel_y: 700,
  allow_up: false, // 允许大于平均值的条消失时上浮。
  always_up: false, // 所有条目上浮 - 用于反向排行榜等情况
  enter_from_0: true, // 设置动画效果，如果为true，则新进入的条目从0开始。
  big_value: false, // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  use_semilogarithmic_coordinate: false,  // 如果要使用半对数坐标，则开启此项
  long: false, // barinfo太长
  wait: 0, // 延迟多少个时间节点开始
  update_rate: 1, // 单独控制交换动画速度倍率
  showLabel: false, // 开启匀速动画效果
  labelx: -10, // label x轴位置
  use_img: false,
  imgs: {},
  background_color: "#ffffff", // 全局背景颜色
  rounded_rectangle: true, // 矩形柱是否为圆角矩形
  show_x_tick: false, // 是否显示x轴轴线
  bar_name_max: 25 // 限制bar info 展示的长度
};