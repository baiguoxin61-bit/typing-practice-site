const categories = [
  "古文练习",
  "拍摄基础",
  "相机参数",
  "构图与运镜",
  "灯光与收音",
  "剪辑基础",
  "调色与声音",
  "短视频脚本",
  "商业拍摄",
  "直播与课程",
  "设备与流程",
  "平台发布",
  "视觉设计",
];

const tenStarTail =
  "作为 10 星训练，输入时不要只追求速度，还要保持专业词汇、英文缩写、数字、标点和完整句子的准确性。练习过程中要连续输入，不要频繁停顿回看；如果出现错字，先判断是看错、手指位置错、输入法选词错，还是标点习惯错。完成后要复盘速度、正确率和错误类型，把常错词单独记录，再进入下一轮。高难度文本的目的，是模拟真实项目文档、客户复盘、课程讲稿和后期交付说明，让打字训练更接近工作现场。";

const tenStarTexts = {
  editingInterview:
    "A-roll 是主叙事画面，B-roll 用来补充信息；在采访剪辑中，J-cut 可以让下一段声音提前进入，画面切换会更自然。剪辑师需要先通看素材，标记观点、情绪、停顿和可用空镜，再判断哪一句保留、哪一句删掉，以及哪一段需要用空镜头覆盖。粗剪阶段不要急着加包装，先把人物表达的逻辑顺序搭起来：问题是什么，为什么重要，案例在哪里，结果如何验证。精剪阶段再处理口误、重复、长停顿和眼神跳动，让信息密度更稳定。遇到客户要求保留某一句话时，要判断它是否破坏节奏，如果破坏，就用字幕、插画、产品特写或现场画面缓冲。采访类视频最怕只剩好看的画面，却没有清楚的观点推进。导出前还要检查字幕断句、声音响度、画面色温、Logo 安全边距、封面截图和不同平台比例。优秀剪辑不是把素材堆满时间线，而是在有限时长里帮助观众更快理解人物、项目和价值。" + tenStarTail,
  postProduction:
    "调色时先做 primary correction，再做 secondary correction；如果肤色偏绿，可以微调 tint、saturation 和 hue。高级后期不是一上来套 LUT，而是先建立准确的技术基础：曝光是否稳定，白平衡是否统一，高光是否溢出，暗部是否丢失，肤色是否偏离自然范围。多机位素材要先匹配主机位，再统一对比度、饱和度和黑位，避免 A 机偏暖、B 机偏冷造成跳戏。声音部分同样重要，人声要放在主要位置，背景音乐只托住情绪，环境声和音效不能抢信息。课程视频还要注意字幕可读性，字号、行距、描边、位置都要适合手机屏幕。商业片导出前，需要分别检查 9:16、16:9、1:1 等版本，确认字幕没有被平台按钮遮挡，二维码没有压缩糊掉，品牌色没有明显偏差。后期流程越复杂，越需要规范命名、备份工程、保存母版和记录修改意见。真正专业的后期交付，不只是画面好看，而是让客户能顺利发布、投放、复盘和继续迭代。" + tenStarTail,
  cameraJudgment:
    "拍摄 4K 25fps 课程画面时，快门速度通常可以设为 1/50s；如果使用 f/1.8 拍半身口播，背景会更虚，但对焦容错更低。现场要同时考虑曝光、景深、人物动作和后期裁切空间。参数不是孤立决定的，光圈影响进光和虚化，快门影响运动模糊，ISO 影响亮度和噪点，焦距影响空间关系和人物透视。室内课程如果灯光不足，不能只盲目提高 ISO，而要先判断主光方向、补光强度和背景层次。人物站位也会影响画面，如果离背景太近，阴影会压在墙上，层次感会变差；如果离麦克风太远，环境声比例会上升。拍摄前要检查电池、存储卡、白平衡、音频电平、监看画面、录制格式和备份方案。拍摄中要留意人物眨眼、口误、手势、道具位置和课件切换。拍摄后要立刻备份素材，并确认每个机位、每条音轨、每个屏幕录制文件都能正常打开。综合参数判断的核心，是让技术选择服务内容表达。" + tenStarTail,
  commercialReview:
    "商业拍摄结束后，需要复盘客户目标、脚本执行、现场调度、素材完整度和成片转化效果。如果只评价画面好不好看，而不看信息是否传达、客户是否满意、投放数据是否提升，复盘就会失去意义。复盘第一步要回到需求：客户到底希望提升品牌认知、获取线索、促进成交，还是训练销售团队使用素材。第二步看脚本执行，开场是否足够明确，卖点是否按优先级出现，案例是否可信，行动提示是否清楚。第三步看现场管理，机位、灯光、收音、道具、场地、人员时间是否有冲突，是否出现等待、返工或遗漏镜头。第四步看后期交付，字幕、音乐、封面、比例、版本命名和修改记录是否规范。第五步看发布数据，完播率、点击率、咨询量、转化率是否有改善。好的复盘不是找人背锅，而是把经验沉淀成下次可执行的清单。商业项目越多，越要建立标准流程，让创意、执行和交付都能稳定复制。" + tenStarTail,
  complexCourse:
    "复杂课程录制通常包含讲师口播、屏幕录制、实操演示、案例素材和互动答疑。剪辑时要统一声音响度，标清章节节点，并用字幕强调关键术语，例如 exposure、timeline、keyframe 和 color grading。录制前需要先拆课程结构，确认每一节的目标、案例、素材包和操作步骤，避免讲师临场跳来跳去。录制中要同时关注讲师表情、屏幕内容、鼠标位置、快捷键提示和实操画面是否清晰。屏幕录制要保证分辨率足够，窗口不要频繁遮挡关键按钮，文件路径和个人信息需要提前隐藏。后期剪辑时，可以用章节标题、局部放大、重点标注和回放片段帮助学员理解，但包装不能喧宾夺主。课程交付还要检查片头片尾、目录命名、字幕错别字、声音噪声、案例授权和资料下载链接。学习型内容最重要的是清楚、稳定、可复习，不只是看起来高级。复杂课程的价值，来自讲解逻辑、操作细节和长期可用的学习体验。" + tenStarTail,
  publishingVersions:
    "同一条商业视频可以输出多个版本：15 秒信息流、30 秒讲解版、60 秒案例版和无字幕备份版。文件命名要标明比例、时长、语言、字幕状态和日期，例如 ad_9x16_30s_cn_sub_0609.mp4。投放版本管理的重点，是让不同渠道都能快速找到正确素材，避免把横版发到竖屏平台，或把无字幕版本误发给需要静音播放的广告位。制作前要先列出平台需求，包括尺寸、码率、封面、安全边距、首帧、标题字数和落地页链接。剪辑时要为每个版本保留核心卖点，但表达节奏可以不同：短版本先给痛点和结果，长版本补充场景、证据和行动提示。导出后要建立检查表，逐一确认字幕位置、Logo 清晰度、音乐版权、二维码可扫、产品信息准确和客户禁用词。投放后还要按版本记录数据，比较点击率、完播率、转化成本和评论反馈。版本越多，管理越不能靠记忆，必须靠命名规则、文件夹结构和复盘表。" + tenStarTail,
  visualSystem:
    "课程账号需要建立稳定的视觉系统，包括封面版式、标题层级、字幕样式、品牌色和案例截图规范。视觉统一不是为了好看而好看，而是降低识别成本，让学员一眼知道这是同一套教学内容。封面设计要先确认主体，再安排标题、辅助信息和品牌元素，文字不能压住人物五官，也不能和背景混成一片。字幕样式要保证手机端可读，字号不能太小，行距不能太挤，颜色要和画面保持足够对比。案例截图要统一边框、阴影、比例和标注方式，避免每节课像不同项目拼在一起。视觉系统还要考虑长期迭代，不能只适合一两张封面，而要能扩展到直播预告、课程目录、作业点评、社群海报和资料包。建立规范后，并不意味着所有内容都一模一样，而是在统一基础上保留变化空间。好的视觉设计会服务教学节奏，让信息更容易被看见、被理解、被记住，也让账号在长期发布中保持专业感。" + tenStarTail,
  audioLighting:
    "多人课程或圆桌访谈要提前规划收音方案：每个人使用独立麦克风，现场保留备份录音，后期按轨道清理噪声、平衡响度，并检查是否有喷麦、爆音、延迟和相位问题。复杂收音现场不能只靠相机内录，因为空间混响、空调声、桌面碰撞和多人抢话都会影响可用性。录制前要试录一段，让每位嘉宾按真实音量说话，再检查电平峰值、底噪和耳机监听。灯光也要配合收音和机位，主光不能挡住讲师看屏幕，补光不能让眼镜严重反光，背景光要提供层次但不能过亮。圆桌场景还要注意桌面道具、线缆走向、水杯位置和人物视线关系。后期处理时，不同人的音色和响度要统一，剪掉明显口误和长停顿，但不能把自然交流剪得过于机械。交付前要在手机、电脑和外放设备上分别试听，确认人声清晰、音乐不过量、字幕能辅助理解。声音和灯光稳定，观众才会把注意力放在内容本身。" + tenStarTail
};

const DEFAULT_LINE_CHAR_LIMIT = 24;
const ARTICLE_VISIBLE_LINES = 2;

const foundationLessons = {
  single: {
    label: "第 1 级 单键定位",
    shortLabel: "单键",
    hint: "不要看真实键盘。看屏幕上高亮的键位，只按下这一个键。",
    instruction: "屏幕亮哪个键，就按哪个键。按对后自动进入下一题。",
    sequence: ["f", "j", "d", "k", "s", "l", "a", ";", "'", ",", ".", "/", "[", "]", "{", "}", "r", "u", "e", "i", "w", "o", "q", "p"],
  },
  home: {
    label: "第 2 级 基准键位",
    shortLabel: "基准键",
    hint: "左右手回到基准键：左手 A S D F，右手 J K L ;。按完每组后手指回位。",
    instruction: "照着目标输入一组基准键，保持手指回到 F 和 J。",
    sequence: "ff jj dd kk ss ll aa ;; fj dk sl af jkl; asdf fjdk slaf".split(" "),
  },
  rows: {
    label: "第 3 级 上下排键",
    shortLabel: "上下排",
    hint: "从基准键出发，抬手到上排或下排，按完马上回到基准键。",
    instruction: "根据屏幕目标输入上下排组合，先慢后稳。",
    sequence: "fr ju de ki sw lo aq ;p fv jm dc k, sx l. az ;/ qwer uiop zxcv bnm".split(" "),
  },
  english: {
    label: "第 4 级 简单英文",
    shortLabel: "英文",
    hint: "开始练短英文单词。眼睛看屏幕，手指按键后回位。",
    instruction: "输入一个英文单词，按空格或完成单词后进入下一题。",
    sequence: "film lens shot edit light sound color focus camera video timeline".split(" "),
  },
  pinyin: {
    label: "第 5 级 简单拼音",
    shortLabel: "拼音",
    hint: "拼音阶段只练字母组合，不选汉字，先把声母韵母打熟。",
    instruction: "输入屏幕上的拼音组合，注意 zh、ch、sh、ing、ong。",
    sequence: "ba ma fa da ta na la ge ke he zhi chi shi an en ing ong guang quan jing tou".split(" "),
  },
  words: {
    label: "第 6 级 汉字词组",
    shortLabel: "词组",
    hint: "现在开始使用中文输入法。先输入短词组，选词准确比速度重要。",
    instruction: "用中文输入法输入这个词组。",
    sequence: ["镜头", "光圈", "快门", "焦距", "构图", "剪辑", "调色", "收音", "字幕", "素材"],
  },
  phrases: {
    label: "第 7 级 中文短语",
    shortLabel: "短语",
    hint: "短语阶段要注意词组连贯输入，减少频繁回看键盘。",
    instruction: "用中文输入法输入这个短语。",
    sequence: ["检查白平衡", "调整补光方向", "整理素材文件", "设置快门速度", "匹配画面色温", "导出字幕版本"],
  },
  sentences: {
    label: "第 8 级 中文短句",
    shortLabel: "短句",
    hint: "短句阶段开始接近真实工作输入，注意标点和语义完整。",
    instruction: "用中文输入法输入完整短句。",
    sequence: [
      "拍摄前要检查电池和存储卡。",
      "画面偏蓝时可以先检查白平衡。",
      "剪辑前要先整理素材和声音文件。",
      "课程录制时要保证讲师声音清晰。",
      "导出前需要检查字幕和封面尺寸。",
    ],
  },
};

const keyboardRows = [
  [
    { key: "`" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
    { key: "9" },
    { key: "0" },
    { key: "-", label: "-" },
    { key: "=", label: "=" },
    { key: "BACKSPACE", label: "Backspace", size: 2 },
  ],
  [
    { key: "TAB", label: "Tab", size: 1.5 },
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "R" },
    { key: "T" },
    { key: "Y" },
    { key: "U" },
    { key: "I" },
    { key: "O" },
    { key: "P" },
    { key: "[", label: "[ { 【" },
    { key: "]", label: "] } 】" },
    { key: "\\", label: "\\", size: 1.5 },
  ],
  [
    { key: "CAPSLOCK", label: "Caps", size: 1.8 },
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "J" },
    { key: "K" },
    { key: "L" },
    { key: ";", label: "; ；" },
    { key: "'", label: "' “" },
    { key: "ENTER", label: "Enter", size: 2.2 },
  ],
  [
    { key: "SHIFT", label: "Shift", size: 2.4 },
    { key: "Z" },
    { key: "X" },
    { key: "C" },
    { key: "V" },
    { key: "B" },
    { key: "N" },
    { key: "M" },
    { key: ",", label: ", ，" },
    { key: ".", label: ". 。" },
    { key: "/", label: "/ ？" },
    { key: "RSHIFT", label: "Shift", size: 2.8 },
  ],
  [
    { key: "CTRL", label: "Ctrl", size: 1.4 },
    { key: "OPTION", label: "Opt", size: 1.4 },
    { key: "COMMAND", label: "Cmd", size: 1.6 },
    { key: "SPACE", label: "Space", size: 6.8 },
    { key: "RCOMMAND", label: "Cmd", size: 1.6 },
    { key: "ROPTION", label: "Opt", size: 1.4 },
  ],
];

const keyFingerMap = {
  "`": "left-pinky",
  1: "left-pinky",
  2: "left-ring",
  3: "left-middle",
  4: "left-index",
  5: "left-index",
  6: "right-index",
  7: "right-index",
  8: "right-middle",
  9: "right-ring",
  0: "right-pinky",
  "-": "right-pinky",
  "=": "right-pinky",
  Q: "left-pinky",
  A: "left-pinky",
  Z: "left-pinky",
  W: "left-ring",
  S: "left-ring",
  X: "left-ring",
  E: "left-middle",
  D: "left-middle",
  C: "left-middle",
  R: "left-index",
  F: "left-index",
  V: "left-index",
  T: "left-index",
  G: "left-index",
  B: "left-index",
  Y: "right-index",
  H: "right-index",
  N: "right-index",
  U: "right-index",
  J: "right-index",
  M: "right-index",
  I: "right-middle",
  K: "right-middle",
  ",": "right-middle",
  O: "right-ring",
  L: "right-ring",
  ".": "right-ring",
  P: "right-pinky",
  ";": "right-pinky",
  "'": "right-pinky",
  "[": "right-pinky",
  "]": "right-pinky",
  "\\": "right-pinky",
  "/": "right-pinky",
  SPACE: "left-thumb",
};

const foundationLessonOrder = Object.keys(foundationLessons);
const directFoundationLessons = new Set(["single", "home", "rows", "english", "pinyin"]);
const shiftSymbolHints = {
  "~": { baseKey: "`", hint: "按住 Shift + `", shiftKey: "SHIFT" },
  "!": { baseKey: "1", hint: "按住 Shift + 1", shiftKey: "SHIFT" },
  "@": { baseKey: "2", hint: "按住 Shift + 2", shiftKey: "SHIFT" },
  "#": { baseKey: "3", hint: "按住 Shift + 3", shiftKey: "SHIFT" },
  "$": { baseKey: "4", hint: "按住 Shift + 4", shiftKey: "SHIFT" },
  "%": { baseKey: "5", hint: "按住 Shift + 5", shiftKey: "SHIFT" },
  "^": { baseKey: "6", hint: "按住 Shift + 6", shiftKey: "RSHIFT" },
  "&": { baseKey: "7", hint: "按住 Shift + 7", shiftKey: "RSHIFT" },
  "*": { baseKey: "8", hint: "按住 Shift + 8", shiftKey: "RSHIFT" },
  "(": { baseKey: "9", hint: "按住 Shift + 9", shiftKey: "RSHIFT" },
  ")": { baseKey: "0", hint: "按住 Shift + 0", shiftKey: "RSHIFT" },
  "_": { baseKey: "-", hint: "按住 Shift + -", shiftKey: "RSHIFT" },
  "+": { baseKey: "=", hint: "按住 Shift + =", shiftKey: "RSHIFT" },
  "{": { baseKey: "[", hint: "按住 Shift + [", shiftKey: "RSHIFT" },
  "}": { baseKey: "]", hint: "按住 Shift + ]", shiftKey: "RSHIFT" },
  "|": { baseKey: "\\", hint: "按住 Shift + \\", shiftKey: "RSHIFT" },
  ":": { baseKey: ";", hint: "按住 Shift + ;", shiftKey: "RSHIFT" },
  '"': { baseKey: "'", hint: "按住 Shift + '", shiftKey: "RSHIFT" },
  "<": { baseKey: ",", hint: "按住 Shift + ,", shiftKey: "RSHIFT" },
  ">": { baseKey: ".", hint: "按住 Shift + .", shiftKey: "RSHIFT" },
  "?": { baseKey: "/", hint: "按住 Shift + /", shiftKey: "RSHIFT" },
};

const symbolAliases = {
  "；": ";",
  "：": ";",
  "“": "'",
  "”": "'",
  "‘": "'",
  "’": "'",
  "，": ",",
  "、": ",",
  "。": ".",
  "《": ",",
  "》": ".",
  "【": "[",
  "「": "[",
  "『": "[",
  "（": "[",
  "(": "[",
  "{": "[",
  "】": "]",
  "」": "]",
  "』": "]",
  "）": "]",
  ")": "]",
  "}": "]",
  "？": "/",
  "！": "1",
};

const classicalTexts = [
  {
    difficulty: 1,
    category: "古文练习",
    title: "陋室铭",
    text: "山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？",
  },
  {
    difficulty: 2,
    category: "古文练习",
    title: "爱莲说",
    text: "水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人盛爱牡丹。予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。噫！菊之爱，陶后鲜有闻。莲之爱，同予者何人？牡丹之爱，宜乎众矣。",
  },
  {
    difficulty: 3,
    category: "古文练习",
    title: "小石潭记",
    text: "从小丘西行百二十步，隔篁竹，闻水声，如鸣佩环，心乐之。伐竹取道，下见小潭，水尤清冽。全石以为底，近岸，卷石底以出，为坻，为屿，为嵁，为岩。青树翠蔓，蒙络摇缀，参差披拂。潭中鱼可百许头，皆若空游无所依。日光下澈，影布石上，佁然不动；俶尔远逝，往来翕忽，似与游者相乐。潭西南而望，斗折蛇行，明灭可见。其岸势犬牙差互，不可知其源。坐潭上，四面竹树环合，寂寥无人，凄神寒骨，悄怆幽邃。以其境过清，不可久居，乃记之而去。同游者：吴武陵，龚古，余弟宗玄。隶而从者，崔氏二小生：曰恕己，曰奉壹。",
  },
  {
    difficulty: 4,
    category: "古文练习",
    title: "桃花源记",
    text: "晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷，渔人甚异之。复前行，欲穷其林。林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。问今是何世，乃不知有汉，无论魏晋。此人一一为具言所闻，皆叹惋。余人各复延至其家，皆出酒食。停数日，辞去。此中人语云：不足为外人道也。既出，得其船，便扶向路，处处志之。及郡下，诣太守，说如此。太守即遣人随其往，寻向所志，遂迷，不复得路。南阳刘子骥，高尚士也。闻之，欣然规往。未果，寻病终，后遂无问津者。",
  },
  {
    difficulty: 5,
    category: "古文练习",
    title: "兰亭集序",
    text: "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹；又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。况修短随化，终期于尽。古人云：死生亦大矣。岂不痛哉！每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔，悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。",
  },
  {
    difficulty: 6,
    category: "古文练习",
    title: "醉翁亭记",
    text: "环滁皆山也。其西南诸峰，林壑尤美。望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。野芳发而幽香，佳木秀而繁阴，风霜高洁，水落而石出者，山间之四时也。朝而往，暮而归，四时之景不同，而乐亦无穷也。至于负者歌于途，行者休于树，前者呼，后者应，伛偻提携，往来而不绝者，滁人游也。临溪而渔，溪深而鱼肥；酿泉为酒，泉香而酒洌；山肴野蔌，杂然而前陈者，太守宴也。宴酣之乐，非丝非竹，射者中，弈者胜，觥筹交错，起坐而喧哗者，众宾欢也。苍颜白发，颓然乎其间者，太守醉也。已而夕阳在山，人影散乱，太守归而宾客从也。树林阴翳，鸣声上下，游人去而禽鸟乐也。然而禽鸟知山林之乐，而不知人之乐；人知从太守游而乐，而不知太守之乐其乐也。醉能同其乐，醒能述以文者，太守也。太守谓谁？庐陵欧阳修也。",
  },
  {
    difficulty: 7,
    category: "古文练习",
    title: "岳阳楼记",
    text: "庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫淫雨霏霏，连月不开；阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧；渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲。居庙堂之高则忧其民；处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰：先天下之忧而忧，后天下之乐而乐乎！噫！微斯人，吾谁与归？时六年九月十五日。",
  },
  {
    difficulty: 8,
    category: "古文练习",
    title: "师说",
    text: "古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？是故无贵无贱，无长无少，道之所存，师之所存也。嗟乎！师道之不传也久矣！欲人之无惑也难矣！古之圣人，其出人也远矣，犹且从师而问焉；今之众人，其下圣人也亦远矣，而耻学于师。是故圣益圣，愚益愚，圣人之所以为圣，愚人之所以为愚，其皆出于此乎！爱其子，择师而教之；于其身也，则耻师焉，惑矣。彼童子之师，授之书而习其句读者，非吾所谓传其道解其惑者也。句读之不知，惑之不解，或师焉，或不焉，小学而大遗，吾未见其明也。巫医乐师百工之人，不耻相师；士大夫之族，曰师曰弟子云者，则群聚而笑之。问之，则曰：彼与彼年相若也，道相似也。位卑则足羞，官盛则近谀。呜呼！师道之不复可知矣。巫医乐师百工之人，君子不齿，今其智乃反不能及，其可怪也欤！圣人无常师。孔子师郯子、苌弘、师襄、老聃。郯子之徒，其贤不及孔子。孔子曰：三人行，则必有我师。是故弟子不必不如师，师不必贤于弟子，闻道有先后，术业有专攻，如是而已。李氏子蟠，年十七，好古文，六艺经传皆通习之，不拘于时，学于余。余嘉其能行古道，作师说以贻之。",
  },
  {
    difficulty: 9,
    category: "古文练习",
    title: "出师表",
    text: "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。侍中侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明。故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。愿陛下托臣以讨贼兴复之效，不效则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎。陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。今当远离，临表涕零，不知所言。",
  },
  {
    difficulty: 10,
    category: "古文练习",
    title: "滕王阁序",
    text: "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今晨捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？呜呼！胜地不常，盛筵难再。兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引。一言均赋，四韵俱成。请洒潘江，各倾陆海云尔。",
  },
];

const bank = [
  ...classicalTexts,
  { difficulty: 1, category: "拍摄基础", title: "基础术语", text: "光圈、快门、焦距、构图、剪辑、调色。" },
  { difficulty: 1, category: "相机参数", title: "相机词汇", text: "ISO、白平衡、曝光、对焦、镜头、景深。" },
  { difficulty: 1, category: "剪辑基础", title: "剪辑词汇", text: "素材、时间线、字幕、音乐、转场、导出。" },
  { difficulty: 1, category: "设备与流程", title: "设备词语", text: "相机、三脚架、补光灯、麦克风、稳定器、监视器。" },
  { difficulty: 1, category: "商业拍摄", title: "商业词语", text: "产品、人像、探店、口播、封面、详情页。" },
  { difficulty: 2, category: "拍摄基础", title: "拍前检查", text: "拍摄前，要检查电池、存储卡和镜头。" },
  { difficulty: 2, category: "构图与运镜", title: "稳定画面", text: "画面要稳定，主体要清楚，背景不要太乱。" },
  { difficulty: 2, category: "灯光与收音", title: "声音检查", text: "收音要清晰，环境声不能盖住人声。" },
  { difficulty: 2, category: "直播与课程", title: "课程录制", text: "录课程前，要测试画面、声音、灯光和屏幕录制。" },
  { difficulty: 2, category: "商业拍摄", title: "商品细节", text: "产品图要拍清楚材质、颜色、大小和使用场景。" },
  { difficulty: 3, category: "相机参数", title: "光圈作用", text: "光圈越大，进光越多，背景虚化也会更明显。" },
  { difficulty: 3, category: "剪辑基础", title: "粗剪顺序", text: "粗剪先定结构，再处理节奏、转场、字幕和音乐。" },
  { difficulty: 3, category: "短视频脚本", title: "开场钩子", text: "开场要先抓住注意力，再说明这条视频能解决什么问题。" },
  { difficulty: 3, category: "设备与流程", title: "素材备份", text: "拍完素材后，先备份原片，再整理音频、图片和工程文件。" },
  { difficulty: 3, category: "直播与课程", title: "直播检查", text: "开播前，要确认推流、网络、收音、灯光和桌面画面。" },
  { difficulty: 4, category: "相机参数", title: "视频规格", text: "常见视频规格包括 1080p、4K、25fps 和 50fps。" },
  { difficulty: 4, category: "灯光与收音", title: "收音提醒", text: "录音时，要避开空调声、风声和衣服摩擦声。" },
  { difficulty: 4, category: "构图与运镜", title: "镜头方向", text: "推镜头强调主体，拉镜头展示空间，横移可以交代环境关系。" },
  { difficulty: 4, category: "商业拍摄", title: "探店镜头", text: "探店视频可以先拍门头，再拍环境、招牌菜、服务过程和顾客反应。" },
  { difficulty: 4, category: "调色与声音", title: "音量平衡", text: "人声要清楚，音乐要垫在下面，音效只在关键动作出现。" },
  { difficulty: 5, category: "相机参数", title: "ISO 与噪点", text: "ISO 会影响画面亮度，也会影响噪点。光线不足时，可以提高 ISO，但画面可能变粗糙。" },
  { difficulty: 5, category: "构图与运镜", title: "镜头景别", text: "全景交代环境，中景展示动作，特写突出细节。拍摄时，要让每个镜头都有明确作用。" },
  { difficulty: 5, category: "剪辑基础", title: "节奏判断", text: "剪辑节奏不是越快越好。信息密度高时，镜头可以短一些；情绪需要停留时，画面要留出呼吸感。" },
  { difficulty: 5, category: "直播与课程", title: "教学画面", text: "录制教学视频时，讲师画面、课件画面和操作画面要层次清楚，不能让字幕遮住关键按钮。" },
  { difficulty: 5, category: "设备与流程", title: "文件命名", text: "素材命名可以包含日期、项目、机位和场景，例如 0609_course_Acam_01，这样后期查找更快。" },
  { difficulty: 6, category: "相机参数", title: "室内采访参数", text: "拍摄参数：f/2.8、1/50s、ISO 400，适合室内人像采访。若画面偏暗，先看灯光，再判断是否需要提高 ISO。" },
  { difficulty: 6, category: "剪辑基础", title: "J-cut 与 L-cut", text: "J-cut 是声音先进入，L-cut 是声音延后退出；两者都能让剪辑更自然。采访、纪录片和课程剪辑中，这类处理很常见。" },
  { difficulty: 6, category: "短视频脚本", title: "脚本分层", text: "脚本可以分成三层：第一层是观点，第二层是案例，第三层是动作指令。学员写脚本时，不要只堆知识点。" },
  { difficulty: 6, category: "商业拍摄", title: "详情页视频", text: "详情页视频要回答三个问题：产品解决什么痛点、使用前后有什么变化、观众为什么现在就需要它。" },
  { difficulty: 6, category: "调色与声音", title: "画面匹配", text: "多机位剪辑时，要匹配曝光、色温和肤色。A 机偏暖、B 机偏冷，会让观众明显感到跳戏。" },
  { difficulty: 7, category: "调色与声音", title: "调色流程", text: "调色前先校正曝光和白平衡，再调整对比度、饱和度和肤色，不要一开始就套滤镜。肤色自然，比风格强烈更重要。" },
  { difficulty: 7, category: "灯光与收音", title: "采访布光", text: "采访布光要先确定主光方向，再处理阴影和背景层次。人物脸部不能一半过曝、一半死黑，眼神光也要留意。" },
  { difficulty: 7, category: "短视频脚本", title: "口播结构", text: "一条教学短视频通常需要开场钩子、核心步骤、案例演示和结尾行动提示。每一句话都要推动观众继续看下去。" },
  { difficulty: 7, category: "设备与流程", title: "项目交付", text: "交付成片前，要检查分辨率、码率、字幕错别字、背景音乐版权和客户要求的封面尺寸，避免返工。" },
  { difficulty: 7, category: "直播与课程", title: "双机位课程", text: "双机位课程可以用正面机位讲解，用侧面机位展示手部操作。剪辑时根据知识重点切换，不要频繁乱切。" },
  { difficulty: 8, category: "拍摄基础", title: "白平衡判断", text: "如果画面偏蓝，可以检查白平衡；如果人物脸部太暗，则需要调整补光方向、曝光或机位。拍摄现场不要只盯着屏幕亮度，还要观察肤色和背景色。" },
  { difficulty: 8, category: "灯光与收音", title: "三点布光", text: "主光决定人物亮度，辅光控制阴影强度，轮廓光负责把人物从背景中分离出来。三点布光不是固定公式，而是一套判断画面层次的方法。" },
  { difficulty: 8, category: "剪辑基础", title: "素材管理", text: "导入素材后，先按日期、机位、场景和声音文件分类，再开始剪辑。文件名混乱会拖慢后期效率，也会增加丢素材的风险。" },
  { difficulty: 8, category: "商业拍摄", title: "品牌短片", text: "品牌短片不是简单堆镜头，而是要让观众理解品牌气质、产品价值和使用场景。镜头语言、音乐情绪和文案节奏要统一。" },
  { difficulty: 8, category: "相机参数", title: "帧率选择", text: "25fps 适合常规叙事，50fps 或 60fps 适合后期慢放。选择帧率前，要先确认交付平台、灯光频闪和项目风格。" },
  { difficulty: 9, category: "短视频脚本", title: "产品短视频", text: "拍摄产品短视频时，先拍全景交代环境，再拍中景展示操作，最后用特写突出细节和质感。脚本中要标清镜头、台词、道具、字幕和音乐情绪。" },
  { difficulty: 9, category: "构图与运镜", title: "运镜逻辑", text: "推镜头可以强调主体，拉镜头可以展示空间，横移适合介绍环境；运镜必须服务信息，而不是为了炫技。每一次移动都应该有起点、终点和视觉重点。" },
  { difficulty: 9, category: "调色与声音", title: "声音层次", text: "后期声音至少要分清人声、音乐和环境声。人声要稳定在主要位置，音乐不能抢信息；必要时使用 EQ、压缩和降噪，让内容听起来更干净。" },
  { difficulty: 9, category: "直播与课程", title: "课程包装", text: "课程包装包含片头、章节标题、重点标注、案例回放和结尾复盘。包装不能喧宾夺主，应该帮助学员看懂结构，而不是分散注意力。" },
  { difficulty: 9, category: "设备与流程", title: "现场统筹", text: "拍摄现场要有人负责脚本、机位、灯光、收音、道具和时间。哪怕是小团队，也要明确谁检查电量、谁备份素材、谁和客户确认镜头。" },
  { difficulty: 10, category: "剪辑基础", title: "采访剪辑", text: tenStarTexts.editingInterview },
  { difficulty: 10, category: "调色与声音", title: "高级后期", text: tenStarTexts.postProduction },
  { difficulty: 10, category: "相机参数", title: "综合参数判断", text: tenStarTexts.cameraJudgment },
  { difficulty: 10, category: "商业拍摄", title: "商业项目复盘", text: tenStarTexts.commercialReview },
  { difficulty: 10, category: "直播与课程", title: "复杂课程录制", text: tenStarTexts.complexCourse },
  { difficulty: 1, category: "视觉设计", title: "画面词语", text: "明暗、色彩、线条、比例、留白、层次、质感。" },
  { difficulty: 1, category: "平台发布", title: "发布词语", text: "标题、封面、标签、合集、评论、完播率、转化。" },
  { difficulty: 1, category: "灯光与收音", title: "灯光词语", text: "主光、辅光、逆光、柔光、硬光、反光板。" },
  { difficulty: 2, category: "视觉设计", title: "画面层次", text: "前景、中景和背景可以让画面更有空间感。" },
  { difficulty: 2, category: "平台发布", title: "封面标题", text: "封面要清楚，标题要具体，不要只写空泛口号。" },
  { difficulty: 2, category: "相机参数", title: "对焦提示", text: "拍人物时，要优先保证眼睛清晰，不能只看背景虚化。" },
  { difficulty: 3, category: "拍摄基础", title: "曝光判断", text: "画面太亮会丢失高光，画面太暗会损失暗部细节。" },
  { difficulty: 3, category: "视觉设计", title: "色彩关系", text: "同类色更柔和，对比色更醒目。做封面时，要让主体和背景分开。" },
  { difficulty: 3, category: "平台发布", title: "发布时间", text: "发布前要检查标题、封面、字幕、标签和合集位置。" },
  { difficulty: 4, category: "相机参数", title: "白平衡基础", text: "白平衡会影响画面冷暖。室内灯光复杂时，要避免人物肤色偏蓝或偏黄。" },
  { difficulty: 4, category: "剪辑基础", title: "时间线基础", text: "时间线是剪辑软件的核心区域，视频、音频、字幕和转场都按时间顺序排列。" },
  { difficulty: 4, category: "直播与课程", title: "推流准备", text: "直播前要测试上传速度、推流码、摄像头、麦克风和监听耳机。" },
  { difficulty: 5, category: "拍摄基础", title: "景别组合", text: "一个完整段落通常需要远景、中景、近景和特写。景别变化越清楚，观众越容易理解空间和动作。" },
  { difficulty: 5, category: "灯光与收音", title: "混合色温", text: "同一场景里，如果窗外日光和室内暖灯混在一起，人物肤色可能不稳定。拍摄前要统一主要光源。" },
  { difficulty: 5, category: "平台发布", title: "数据复盘", text: "短视频发布后，要看播放量、完播率、点赞率、评论和转化。只看播放量，容易误判内容质量。" },
  { difficulty: 6, category: "视觉设计", title: "封面层级", text: "封面设计要先确定主体，再安排标题、辅助信息和品牌元素。文字不能压住人物五官，也不能和背景混成一片。" },
  { difficulty: 6, category: "拍摄基础", title: "镜头组接", text: "拍摄同一个动作时，可以先拍完整过程，再补拍手部、表情、道具和环境特写。后期剪辑会更有选择空间。" },
  { difficulty: 6, category: "平台发布", title: "账号栏目", text: "账号内容可以分成固定栏目，例如基础教学、案例拆解、设备推荐、学员作业点评。栏目稳定后，观众更容易形成期待。" },
  { difficulty: 7, category: "相机参数", title: "快门与帧率", text: "视频拍摄常用 180 度快门思路：25fps 可参考 1/50s，50fps 可参考 1/100s。这个规则不是死规定，但能让运动模糊更自然。" },
  { difficulty: 7, category: "剪辑基础", title: "关键帧", text: "关键帧可以控制位置、缩放、透明度、音量和颜色参数。做课程包装时，轻微动画比夸张飞入更耐看。" },
  { difficulty: 7, category: "灯光与收音", title: "声音距离", text: "麦克风离说话人越远，环境声比例越高。录课程时，领夹麦、枪麦或桌面麦都要先试录，再判断噪声和混响。" },
  { difficulty: 8, category: "相机参数", title: "焦距表达", text: "广角镜头能展示空间，但容易夸张边缘；长焦镜头能压缩空间，让背景更紧凑。选择焦距时，要同时考虑场地大小、人物距离和画面情绪。" },
  { difficulty: 8, category: "平台发布", title: "内容矩阵", text: "同一个教学主题可以拆成多种内容：一分钟技巧、三分钟案例、直播答疑、图文清单和学员作业点评。矩阵化发布能提高素材利用率。" },
  { difficulty: 8, category: "视觉设计", title: "字幕可读性", text: "字幕不只是把话打出来，还要考虑字号、行距、对比度和安全边距。竖屏视频里，字幕过低会被按钮遮挡，过高会挡住人物表情。" },
  { difficulty: 9, category: "相机参数", title: "Log 与 LUT", text: "Log 画面保留更多后期空间，但原始观感会偏灰。LUT 可以快速建立风格，但不能替代基础校正；曝光、白平衡和肤色仍然要先处理。" },
  { difficulty: 9, category: "剪辑基础", title: "叙事剪辑", text: "叙事剪辑不是把素材按拍摄顺序摆上去，而是重新安排信息释放。先给问题，再给过程，最后给结果，观众会更容易跟住内容。" },
  { difficulty: 9, category: "商业拍摄", title: "客户沟通", text: "商业项目开拍前，要确认交付比例、成片时长、使用平台、参考风格、禁用元素和修改轮次。需求越早说清楚，现场和后期越少扯皮。" },
  { difficulty: 10, category: "平台发布", title: "投放版本管理", text: tenStarTexts.publishingVersions },
  { difficulty: 10, category: "视觉设计", title: "视觉统一", text: tenStarTexts.visualSystem },
  { difficulty: 10, category: "灯光与收音", title: "复杂收音现场", text: tenStarTexts.audioLighting },
];

const supplementalArticleSeeds = {
  拍摄基础: ["构图", "曝光", "景别", "机位", "运动", "主体", "背景", "现场记录"],
  构图与运镜: ["三分法", "前景", "引导线", "推拉摇移", "节奏", "空间关系", "视觉重点", "镜头目的"],
  灯光与收音: ["主光", "辅光", "轮廓光", "领夹麦", "底噪", "混响", "电平", "监听"],
  剪辑基础: ["粗剪", "精剪", "时间线", "节奏点", "转场", "字幕", "音画同步", "导出检查"],
  调色与声音: ["白平衡", "曝光校正", "肤色", "饱和度", "响度", "降噪", "均衡", "母版"],
  短视频脚本: ["开场钩子", "痛点", "卖点", "案例", "镜头表", "口播", "行动提示", "复盘"],
  商业拍摄: ["客户需求", "脚本确认", "产品卖点", "现场调度", "交付比例", "修改意见", "投放数据", "复盘"],
  直播与课程: ["课件", "推流", "讲师", "屏幕录制", "互动", "章节", "回放", "作业点评"],
  设备与流程: ["电池", "存储卡", "镜头", "稳定器", "备份", "命名", "工程文件", "交付清单"],
  平台发布: ["标题", "封面", "标签", "合集", "首帧", "完播率", "点击率", "评论反馈"],
  视觉设计: ["版式", "标题层级", "品牌色", "留白", "对比", "封面", "截图", "视觉规范"],
};

function makeSupplementalText(category, difficulty) {
  const seeds = supplementalArticleSeeds[category] ?? ["目标", "流程", "检查", "复盘"];
  const sentences = [
    `${category}训练要先明确任务目标，再把操作步骤拆成可以检查的小环节。`,
    `本级重点关注${seeds.slice(0, 3).join("、")}，输入时要保持词语准确，标点也不要忽略。`,
    `练习过程中可以先慢一点，确认每个词都看清楚，再逐步提高连续输入速度。`,
    `如果出现错误，要判断是看错文字、键位不熟，还是输入法选词不稳定。`,
    `完成后建议复盘${seeds.slice(3, 6).join("、")}，把常错内容单独记录下来。`,
    `高星级训练还要模拟真实工作场景，连续输入项目说明、执行要求和检查标准。`,
    `当内容变长时，注意保持呼吸节奏，不要频繁停顿，也不要只追求速度而牺牲准确率。`,
    `最终目标是让${category}相关术语、流程和判断方式都能稳定地输入出来。`,
  ];
  return sentences.slice(0, Math.min(sentences.length, Math.max(2, Math.ceil(difficulty / 2)))).join("");
}

function fillMissingArticlePrompts() {
  categories
    .filter((category) => category !== "古文练习")
    .forEach((category) => {
      for (let difficulty = 1; difficulty <= 10; difficulty += 1) {
        const exists = bank.some((item) => item.category === category && item.difficulty === difficulty);
        if (exists) continue;
        bank.push({
          difficulty,
          category,
          title: `${category}补充训练 ${difficulty}星`,
          text: makeSupplementalText(category, difficulty),
        });
      }
    });
}

fillMissingArticlePrompts();

const state = {
  activeView: "foundation",
  mode: "practice",
  current: null,
  currentIndex: -1,
  startedAt: null,
  timer: null,
  examEndsAt: null,
  finished: false,
  isComposing: false,
  compositionBaseValue: "",
  comparableTarget: "",
  comparableTargetChars: [],
  foundation: {
    lesson: "home",
    index: 0,
    correct: 0,
    errors: 0,
    started: false,
    isComposing: false,
    errorSignature: "",
  },
};

const els = {
  foundationView: document.querySelector("#foundationView"),
  articleView: document.querySelector("#articleView"),
  foundationLesson: document.querySelector("#foundationLesson"),
  foundationStartBtn: document.querySelector("#foundationStartBtn"),
  foundationResetBtn: document.querySelector("#foundationResetBtn"),
  foundationTip: document.querySelector("#foundationTip"),
  foundationGuide: document.querySelector("#foundationGuide"),
  foundationInstruction: document.querySelector("#foundationInstruction"),
  foundationLessonLabel: document.querySelector("#foundationLessonLabel"),
  foundationProgressLabel: document.querySelector("#foundationProgressLabel"),
  foundationCorrectLabel: document.querySelector("#foundationCorrectLabel"),
  foundationErrorLabel: document.querySelector("#foundationErrorLabel"),
  foundationHint: document.querySelector("#foundationHint"),
  foundationTarget: document.querySelector("#foundationTarget"),
  foundationInput: document.querySelector("#foundationInput"),
  virtualKeyboard: document.querySelector("#virtualKeyboard"),
  viewBtns: document.querySelectorAll("[data-view]"),
  resultsBand: document.querySelector("#resultsBand"),
  classicalQuickBtn: document.querySelector("#classicalQuickBtn"),
  articleCategoryGuide: document.querySelector("#articleCategoryGuide"),
  categorySelect: document.querySelector("#categorySelect"),
  difficultyRange: document.querySelector("#difficultyRange"),
  difficultyLabel: document.querySelector("#difficultyLabel"),
  starMeter: document.querySelector("#starMeter"),
  setupNotice: document.querySelector("#setupNotice"),
  examSettings: document.querySelector("#examSettings"),
  studentName: document.querySelector("#studentName"),
  examDuration: document.querySelector("#examDuration"),
  startBtn: document.querySelector("#startBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  modeTip: document.querySelector("#modeTip"),
  modeLabel: document.querySelector("#modeLabel"),
  timeMetric: document.querySelector("#timeMetric"),
  speedMetric: document.querySelector("#speedMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  errorMetric: document.querySelector("#errorMetric"),
  punctMetric: document.querySelector("#punctMetric"),
  promptMeta: document.querySelector("#promptMeta"),
  promptTitle: document.querySelector("#promptTitle"),
  examCountdown: document.querySelector("#examCountdown"),
  targetText: document.querySelector("#targetText"),
  typingInput: document.querySelector("#typingInput"),
  progressBar: document.querySelector("#progressBar"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  historyList: document.querySelector("#historyList"),
  clearHistoryBtn: document.querySelector("#clearHistoryBtn"),
  modeBtns: document.querySelectorAll(".article-mode-btn"),
};

function init() {
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categorySelect.appendChild(option);
  });

  renderDifficultyButtons();

  bindEvents();
  renderKeyboard();
  renderFoundationGuide();
  renderArticleCategoryGuide();
  updateFoundationLesson("single");
  updateDifficulty();
  updateView("foundation");
  updateMode("practice");
  renderHistory();
}

function bindEvents() {
  els.viewBtns.forEach((button) => {
    button.addEventListener("click", () => updateView(button.dataset.view));
  });
  els.foundationLesson.addEventListener("change", () => updateFoundationLesson(els.foundationLesson.value));
  els.foundationStartBtn.addEventListener("click", startFoundationPractice);
  els.foundationResetBtn.addEventListener("click", resetFoundationPractice);
  els.foundationInput.addEventListener("input", handleFoundationInput);
  els.foundationInput.addEventListener("compositionstart", () => {
    state.foundation.isComposing = true;
  });
  els.foundationInput.addEventListener("compositionend", () => {
    state.foundation.isComposing = false;
    handleFoundationInput();
  });
  window.addEventListener("keydown", handlePhysicalKeyDown);
  window.addEventListener("keyup", handlePhysicalKeyUp);
  els.categorySelect.addEventListener("change", () => {
    resetChapterPosition();
    updateSetupNotice();
  });
  els.classicalQuickBtn.addEventListener("click", selectClassicalPractice);
  els.difficultyRange.addEventListener("input", () => {
    resetChapterPosition();
    updateDifficulty();
  });
  els.startBtn.addEventListener("click", startSession);
  els.submitBtn.addEventListener("click", () => finishSession("已交卷"));
  els.prevBtn.addEventListener("click", () => moveChapter(-1));
  els.nextBtn.addEventListener("click", () => moveChapter(1));
  els.resetBtn.addEventListener("click", resetCurrent);
  els.typingInput.addEventListener("input", handleInput);
  els.typingInput.addEventListener("compositionstart", handleCompositionStart);
  els.typingInput.addEventListener("compositionend", handleCompositionEnd);
  window.addEventListener("resize", () => renderTarget(Boolean(state.startedAt)));
  els.clearHistoryBtn.addEventListener("click", clearHistory);
  els.modeBtns.forEach((button) => {
    button.addEventListener("click", () => updateMode(button.dataset.mode));
  });
}

function renderDifficultyButtons() {
  els.starMeter.innerHTML = "";
  for (let value = 1; value <= 10; value += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "difficulty-chip";
    button.dataset.difficulty = String(value);
    button.textContent = `${value}`;
    button.setAttribute("aria-label", `${value} 星难度`);
    button.addEventListener("click", () => selectDifficulty(value));
    els.starMeter.appendChild(button);
  }
}

function selectDifficulty(value) {
  if (!els.categorySelect.value) {
    els.setupNotice.textContent = "请先点选上方内容分类，再选择难度。";
    els.setupNotice.classList.remove("ready");
    return;
  }
  const availableDifficulty = getAvailableDifficultyForCategory(els.categorySelect.value, value);
  els.difficultyRange.value = String(availableDifficulty);
  resetChapterPosition();
  updateDifficulty();
}

function selectClassicalPractice() {
  els.categorySelect.value = "古文练习";
  els.difficultyRange.value = "7";
  resetChapterPosition();
  updateDifficulty();
  updateSetupNotice();
  els.setupNotice.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function selectArticleCategory(category, preferredDifficulty = Number(els.difficultyRange.value) || 1) {
  els.categorySelect.value = category;
  els.difficultyRange.value = String(getDefaultDifficultyForCategory(category, preferredDifficulty));
  resetChapterPosition();
  updateDifficulty();
  updateSetupNotice();
}

function getAvailableDifficultyForCategory(category, preferredDifficulty) {
  const available = bank
    .filter((item) => item.category === category)
    .map((item) => item.difficulty);
  if (!available.length) return preferredDifficulty;
  if (available.includes(preferredDifficulty)) return preferredDifficulty;
  return available.reduce((best, current) => {
    const bestDistance = Math.abs(best - preferredDifficulty);
    const currentDistance = Math.abs(current - preferredDifficulty);
    return currentDistance < bestDistance ? current : best;
  }, available[0]);
}

function getDefaultDifficultyForCategory(category, preferredDifficulty) {
  const difficulties = getDifficultiesForCategory(category);
  if (!difficulties.length) return preferredDifficulty;
  if (difficulties.includes(preferredDifficulty)) return preferredDifficulty;
  return difficulties.reduce((best, current) => {
    const bestDistance = Math.abs(best - preferredDifficulty);
    const currentDistance = Math.abs(current - preferredDifficulty);
    return currentDistance < bestDistance ? current : best;
  }, difficulties[0]);
}

function renderArticleCategoryGuide() {
  els.articleCategoryGuide.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-chip";
    button.textContent = category;
    button.addEventListener("click", () => selectArticleCategory(category));
    els.articleCategoryGuide.appendChild(button);
  });
}

function updateView(view) {
  state.activeView = view;
  els.foundationView.hidden = view !== "foundation";
  els.articleView.hidden = view !== "article";
  els.resultsBand.hidden = view !== "article";
  els.viewBtns.forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  if (view === "foundation") {
    stopTimer();
    els.foundationInput.focus();
  } else {
    renderSelectedPrompt();
  }
}

function updateFoundationLesson(lessonKey) {
  state.foundation.lesson = lessonKey;
  resetFoundationPractice(false);
}

function getFoundationLesson() {
  return foundationLessons[state.foundation.lesson] ?? foundationLessons.home;
}

function usesDirectFoundationInput() {
  return directFoundationLessons.has(state.foundation.lesson);
}

function syncFoundationInputMode() {
  const directInput = usesDirectFoundationInput();
  els.foundationInput.readOnly = directInput;
  els.foundationInput.inputMode = directInput ? "none" : "text";
  els.foundationInput.placeholder = directInput ? "直接按键盘，不用中文输入法" : "用中文输入法输入";
}

function startFoundationPractice() {
  state.foundation.started = true;
  state.foundation.index = 0;
  state.foundation.correct = 0;
  state.foundation.errors = 0;
  state.foundation.errorSignature = "";
  els.foundationInput.value = "";
  els.foundationInput.disabled = false;
  syncFoundationInputMode();
  els.foundationInput.focus();
  updateFoundationDisplay();
}

function resetFoundationPractice(focusInput = true) {
  state.foundation.started = false;
  state.foundation.index = 0;
  state.foundation.correct = 0;
  state.foundation.errors = 0;
  state.foundation.errorSignature = "";
  els.foundationInput.value = "";
  els.foundationInput.disabled = true;
  syncFoundationInputMode();
  updateFoundationDisplay();
  if (focusInput) els.foundationInput.focus();
}

function updateFoundationDisplay() {
  const lesson = getFoundationLesson();
  const target = lesson.sequence[state.foundation.index] ?? "";
  const complete = state.foundation.index >= lesson.sequence.length;
  const inputStatus = getFoundationInputStatus(target);
  els.foundationLessonLabel.textContent = lesson.label;
  els.foundationHint.textContent = complete ? "这组基础练习完成了，可以重来或切换课程。" : lesson.hint;
  els.foundationInstruction.textContent = complete
    ? "本级完成，切换到下一等级继续练。"
    : getFoundationInstructionText(lesson, target, inputStatus);
  els.foundationTip.textContent = state.foundation.started
    ? "照着目标输入；按错会闪红，按对会推进到下一组。"
    : "先把左右手食指放在 F 和 J，屏幕键盘会同步显示按下的键位。";
  els.foundationTarget.textContent = target || "完成";
  els.foundationProgressLabel.textContent = `${Math.min(state.foundation.index, lesson.sequence.length)}/${lesson.sequence.length}`;
  els.foundationCorrectLabel.textContent = String(state.foundation.correct);
  els.foundationErrorLabel.textContent = String(state.foundation.errors);
  els.foundationInput.classList.toggle("has-error", Boolean(inputStatus.mismatch));
  highlightTargetKeys(getNextFoundationKeys(target));
  renderFoundationGuide();
}

function getFoundationInstructionText(lesson, target, inputStatus = getFoundationInputStatus(target)) {
  if (inputStatus.mismatch) {
    const expectedText = inputStatus.expected ? `应该输入 ${inputStatus.expected}` : "这里已经超出目标长度";
    return `第 ${inputStatus.position} 个字符不对，${expectedText}。请按退格键修正后继续。`;
  }
  const nextChar = getNextFoundationCharacter(target);
  const shiftHint = shiftSymbolHints[nextChar];
  if (!shiftHint || !usesDirectFoundationInput()) return lesson.instruction;
  return `${lesson.instruction} 当前符号 ${nextChar}：${shiftHint.hint}。`;
}

function handleFoundationInput() {
  if (!state.foundation.started || state.foundation.isComposing) return;
  const lesson = getFoundationLesson();
  const target = lesson.sequence[state.foundation.index];
  const input = normalizeFoundationInput(els.foundationInput.value);
  if (!target || !input) return;
  flashTypedKey(input[input.length - 1]);

  const normalizedTarget = normalizeFoundationInput(target).toLowerCase();
  if (!normalizedTarget.startsWith(input.toLowerCase())) {
    recordFoundationError(input);
    updateFoundationDisplay();
    return;
  }

  state.foundation.errorSignature = "";

  if (input.length < normalizeFoundationInput(target).length) {
    updateFoundationDisplay();
    return;
  }

  if (input.toLowerCase() === normalizeFoundationInput(target).toLowerCase()) {
    completeFoundationItem();
  }
  updateFoundationDisplay();
}

function getNextFoundationCharacter(target) {
  const lessonKey = state.foundation.lesson;
  if (["words", "phrases", "sentences"].includes(lessonKey)) return "";
  const inputStatus = getFoundationInputStatus(target);
  const nextIndex = inputStatus.mismatch
    ? inputStatus.position - 1
    : normalizeFoundationInput(els.foundationInput.value).length;
  return target[nextIndex] ?? "";
}

function getNextFoundationKeys(target) {
  const char = getNextFoundationCharacter(target);
  if (!char) return [];
  const shiftHint = shiftSymbolHints[char];
  if (shiftHint) return [shiftHint.shiftKey, shiftHint.baseKey];
  return [normalizeKeyboardCharacter(char)];
}

function normalizeFoundationInput(value) {
  return [...value.replace(/\s+/g, "")].map(normalizeKeyboardCharacter).join("");
}

function normalizeKeyboardCharacter(char) {
  if (!char) return "";
  return symbolAliases[char] ?? char;
}

function completeFoundationItem() {
  const lesson = getFoundationLesson();
  state.foundation.correct += 1;
  state.foundation.index += 1;
  state.foundation.errorSignature = "";
  els.foundationInput.value = "";
  flashFoundationInput("correct");
  if (state.foundation.index >= lesson.sequence.length) {
    state.foundation.started = false;
    els.foundationInput.disabled = true;
  }
}

function flashFoundationInput(type) {
  els.foundationInput.classList.remove("correct-flash", "incorrect-flash");
  window.requestAnimationFrame(() => {
    els.foundationInput.classList.add(type === "correct" ? "correct-flash" : "incorrect-flash");
  });
}

function renderKeyboard() {
  els.virtualKeyboard.innerHTML = "";
  keyboardRows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "keyboard-row";
    row.forEach((keyInfo) => {
      const key = keyInfo.key;
      const keyEl = document.createElement("div");
      keyEl.className = key === "SPACE" ? "keyboard-key space-key" : "keyboard-key";
      keyEl.dataset.key = key;
      keyEl.dataset.finger = keyFingerMap[key] ?? "";
      keyEl.style.setProperty("--key-size", String(keyInfo.size ?? 1));
      keyEl.textContent = keyInfo.label ?? (key === "SPACE" ? "Space" : key);
      rowEl.appendChild(keyEl);
    });
    els.virtualKeyboard.appendChild(rowEl);
  });
}

function renderFoundationGuide() {
  els.foundationGuide.innerHTML = "";
  foundationLessonOrder.forEach((lessonKey, index) => {
    const lesson = foundationLessons[lessonKey];
    const item = document.createElement("li");
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.classList.toggle("active", lessonKey === state.foundation.lesson);
    item.classList.toggle("done", foundationLessonOrder.indexOf(state.foundation.lesson) > index);
    item.textContent = lesson.label;
    item.addEventListener("click", () => {
      els.foundationLesson.value = lessonKey;
      updateFoundationLesson(lessonKey);
    });
    item.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      els.foundationLesson.value = lessonKey;
      updateFoundationLesson(lessonKey);
    });
    els.foundationGuide.appendChild(item);
  });
}

function handlePhysicalKeyDown(event) {
  const key = normalizeKey(event.key, event.code);
  if (!key) return;
  setKeyPressed(key, true);
  if (handleDirectFoundationKey(key, event)) return;
  handleSingleKeyFoundation(key, event);
}

function handlePhysicalKeyUp(event) {
  const key = normalizeKey(event.key, event.code);
  if (!key) return;
  setKeyPressed(key, false);
}

function normalizeKey(key, code = "") {
  const codeKey = normalizeKeyCode(code);
  if (codeKey) return codeKey;
  if (key === " ") return "SPACE";
  if (key === "Backspace") return "BACKSPACE";
  if (key === "Tab") return "TAB";
  if (key === "Enter") return "ENTER";
  if (key === "CapsLock") return "CAPSLOCK";
  if (key === "Shift") return "SHIFT";
  if (key === "Control") return "CTRL";
  if (key === "Alt") return "OPTION";
  if (key === "Meta") return "COMMAND";
  if (key.length === 1) {
    const normalized = normalizeKeyboardCharacter(key);
    return /[a-z]/i.test(normalized) ? normalized.toUpperCase() : normalized;
  }
  return "";
}

function normalizeKeyCode(code) {
  const codeMap = {
    Backquote: "`",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    Digit0: "0",
    Minus: "-",
    Equal: "=",
    Backspace: "BACKSPACE",
    Tab: "TAB",
    BracketLeft: "[",
    BracketRight: "]",
    Backslash: "\\",
    CapsLock: "CAPSLOCK",
    Semicolon: ";",
    Quote: "'",
    Enter: "ENTER",
    ShiftLeft: "SHIFT",
    ShiftRight: "RSHIFT",
    Comma: ",",
    Period: ".",
    Slash: "/",
    ControlLeft: "CTRL",
    AltLeft: "OPTION",
    MetaLeft: "COMMAND",
    Space: "SPACE",
    MetaRight: "RCOMMAND",
    AltRight: "ROPTION",
    ControlRight: "RCTRL",
  };
  if (codeMap[code]) return codeMap[code];
  if (/^Key[A-Z]$/.test(code)) return code.slice(3);
  return "";
}

function handleDirectFoundationKey(key, event) {
  if (!state.foundation.started || !usesDirectFoundationInput()) return false;
  if (state.activeView !== "foundation") return false;
  if (event.metaKey || event.ctrlKey || event.altKey) return false;
  if (key.length > 1 && key !== "SPACE" && key !== "BACKSPACE") return false;

  event.preventDefault();

  if (key === "BACKSPACE") {
    els.foundationInput.value = [...els.foundationInput.value].slice(0, -1).join("");
    state.foundation.errorSignature = "";
    updateFoundationDisplay();
    return true;
  }

  const typedChar = key === "SPACE" ? " " : key.toLowerCase();
  els.foundationInput.value += typedChar;
  flashTypedKey(typedChar);
  evaluateDirectFoundationInput();
  return true;
}

function evaluateDirectFoundationInput() {
  const target = getFoundationLesson().sequence[state.foundation.index];
  const input = normalizeFoundationInput(els.foundationInput.value).toLowerCase();
  const normalizedTarget = normalizeFoundationInput(target ?? "").toLowerCase();
  if (!normalizedTarget || !input) return;

  if (!normalizedTarget.startsWith(input)) {
    recordFoundationError(input);
    updateFoundationDisplay();
    return;
  }

  state.foundation.errorSignature = "";

  if (input.length >= normalizedTarget.length && input === normalizedTarget) {
    completeFoundationItem();
  }
  updateFoundationDisplay();
}

function recordFoundationError(signature) {
  if (state.foundation.errorSignature !== signature) {
    state.foundation.errors += 1;
    state.foundation.errorSignature = signature;
  }
  flashFoundationInput("incorrect");
}

function getFoundationInputStatus(target) {
  const normalizedTarget = normalizeFoundationInput(target ?? "").toLowerCase();
  const normalizedInput = normalizeFoundationInput(els.foundationInput.value).toLowerCase();
  if (!normalizedTarget || !normalizedInput) return { mismatch: false };

  const maxComparable = Math.min(normalizedInput.length, normalizedTarget.length);
  for (let index = 0; index < maxComparable; index += 1) {
    if (normalizedInput[index] !== normalizedTarget[index]) {
      return {
        mismatch: true,
        position: index + 1,
        expected: target[index] ?? "",
      };
    }
  }

  if (normalizedInput.length > normalizedTarget.length) {
    return {
      mismatch: true,
      position: normalizedTarget.length + 1,
      expected: "",
    };
  }

  return { mismatch: false };
}

function handleSingleKeyFoundation(key, event) {
  if (!state.foundation.started || state.foundation.lesson !== "single") return;
  const target = normalizeKeyboardCharacter(getFoundationLesson().sequence[state.foundation.index] ?? "");
  const normalizedTarget = /[a-z]/i.test(target) ? target.toUpperCase() : target;
  if (!target) return;
  if (key.length > 1 && key !== "SPACE") return;
  event.preventDefault();
  if (key === normalizedTarget) {
    completeFoundationItem();
    updateFoundationDisplay();
    return;
  }
  if (key.length === 1 || key === "SPACE") {
    state.foundation.errors += 1;
    flashFoundationInput("incorrect");
    updateFoundationDisplay();
  }
}

function setKeyPressed(key, pressed) {
  const keyEl = findKeyElement(key);
  if (!keyEl) return;
  keyEl.classList.toggle("pressed", pressed);
  const finger = keyEl.dataset.finger;
  if (finger) {
    document.querySelectorAll(`.finger[data-finger="${finger}"]`).forEach((el) => {
      el.classList.toggle("active", pressed);
    });
  }
}

function flashTypedKey(char) {
  const normalized = normalizeKeyboardCharacter(char);
  const key = normalized === " " ? "SPACE" : /[a-z]/i.test(normalized) ? normalized.toUpperCase() : normalized;
  const keyEl = findKeyElement(key);
  if (!keyEl) return;
  keyEl.classList.remove("typed");
  window.requestAnimationFrame(() => {
    keyEl.classList.add("typed");
    window.setTimeout(() => keyEl.classList.remove("typed"), 220);
  });
}

function highlightTargetKeys(targetKeys) {
  els.virtualKeyboard.querySelectorAll(".target").forEach((key) => key.classList.remove("target"));
  document.querySelectorAll(".finger.target").forEach((finger) => finger.classList.remove("target"));
  targetKeys.forEach((char) => {
    const normalized = normalizeKeyboardCharacter(char);
    const key = normalized === " " ? "SPACE" : /[a-z]/i.test(normalized) ? normalized.toUpperCase() : normalized;
    const keyEl = findKeyElement(key);
    if (!keyEl) return;
    keyEl.classList.add("target");
    const finger = keyEl.dataset.finger;
    if (finger) {
      document.querySelectorAll(`.finger[data-finger="${finger}"]`).forEach((el) => el.classList.add("target"));
    }
  });
}

function findKeyElement(key) {
  return [...els.virtualKeyboard.querySelectorAll(".keyboard-key")].find((el) => el.dataset.key === key);
}

function resetChapterPosition() {
  state.currentIndex = 0;
}

function updateMode(mode) {
  state.mode = mode;
  stopTimer();
  state.finished = false;
  els.modeBtns.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  els.examSettings.hidden = mode !== "exam";
  els.examCountdown.hidden = mode !== "exam";
  els.submitBtn.hidden = mode !== "exam";
  els.modeLabel.textContent = mode === "practice" ? "练习" : "考试";
  els.modeTip.textContent =
    mode === "practice"
      ? "练习窗口会实时标出错误，适合边打边改。"
      : "考试窗口限时完成，不实时提示错误，交卷后统一评分。";
  els.typingInput.value = "";
  els.typingInput.disabled = true;
  renderSelectedPrompt();
  updateMetrics();
}

function updateDifficulty() {
  const value = Number(els.difficultyRange.value);
  els.difficultyLabel.textContent = value > 0 ? `${value} 星` : "请选择";
  updateDifficultyButtons();
  updateSetupNotice();
}

function updateDifficultyButtons() {
  const selectedDifficulty = Number(els.difficultyRange.value);
  const selectedCategory = els.categorySelect.value;
  const availableDifficulties = getDifficultiesForCategory(selectedCategory);
  els.starMeter.querySelectorAll(".difficulty-chip").forEach((button) => {
    const difficulty = Number(button.dataset.difficulty);
    const available = !selectedCategory || availableDifficulties.includes(difficulty);
    button.classList.toggle("active", difficulty === selectedDifficulty);
    button.classList.toggle("unavailable", Boolean(selectedCategory) && !available);
    button.disabled = Boolean(selectedCategory) && !available;
    button.title = available ? `${difficulty} 星` : "该类目暂未配置此星级内容";
  });
}

function getDifficultiesForCategory(category) {
  if (!category) return [];
  return [...new Set(bank.filter((item) => item.category === category).map((item) => item.difficulty))].sort((a, b) => a - b);
}

function startSession() {
  if (!validateSetup()) return;
  selectCurrentPrompt();
  beginCurrentSession();
}

function beginCurrentSession() {
  state.startedAt = Date.now();
  state.finished = false;
  els.typingInput.value = "";
  els.typingInput.disabled = false;
  els.typingInput.focus();
  renderPromptInfo();
  renderTarget(true);
  startTimer();
  updateMetrics();

  if (state.mode === "exam") {
    state.examEndsAt = Date.now() + Number(els.examDuration.value) * 1000;
    updateCountdown();
  }
}

function resetCurrent() {
  if (!validateSetup()) return;
  if (!state.current) {
    startSession();
    return;
  }
  state.startedAt = Date.now();
  state.finished = false;
  els.typingInput.value = "";
  els.typingInput.disabled = false;
  els.typingInput.focus();
  renderTarget(true);
  startTimer();
  updateMetrics();

  if (state.mode === "exam") {
    state.examEndsAt = Date.now() + Number(els.examDuration.value) * 1000;
  }
}

function getCandidates() {
  const difficulty = Number(els.difficultyRange.value);
  const category = els.categorySelect.value;
  const categoryPool = category ? bank.filter((item) => item.category === category) : bank;
  let candidates = categoryPool.filter((item) => item.difficulty === difficulty);
  if (!candidates.length) {
    const nearestDifficulty = getNearestDifficulty(categoryPool, difficulty);
    candidates = categoryPool.filter((item) => item.difficulty === nearestDifficulty);
  }
  return candidates;
}

function getNearestDifficulty(items, preferredDifficulty) {
  if (!items.length) return preferredDifficulty;
  return items.reduce((best, item) => {
    const bestDistance = Math.abs(best - preferredDifficulty);
    const currentDistance = Math.abs(item.difficulty - preferredDifficulty);
    return currentDistance < bestDistance ? item.difficulty : best;
  }, items[0].difficulty);
}

function moveChapter(direction) {
  if (!validateSetup()) return;
  const candidates = getCandidates();
  if (!candidates.length) return;
  state.currentIndex = (state.currentIndex + direction + candidates.length) % candidates.length;
  setCurrentPrompt(candidates[state.currentIndex]);
  stopTimer();
  state.finished = false;
  state.startedAt = null;
  state.examEndsAt = null;
  els.typingInput.value = "";
  els.typingInput.disabled = true;
  renderPromptInfo();
  renderTarget(false);
  updateMetrics();
  els.resultTitle.textContent = "已选择章节";
  els.resultText.textContent = "点击开始后进入本章训练。";
}

function selectCurrentPrompt() {
  const candidates = getCandidates();
  state.currentIndex = state.currentIndex < 0 ? 0 : state.currentIndex % candidates.length;
  setCurrentPrompt(candidates[state.currentIndex]);
}

function setCurrentPrompt(prompt) {
  state.current = prompt;
  state.comparableTarget = normalizeTypingText(prompt?.text ?? "");
  state.comparableTargetChars = [...state.comparableTarget];
}

function renderSelectedPrompt() {
  if (!validateSetup(false)) {
    setCurrentPrompt(null);
    els.promptMeta.textContent = "等待选择";
    els.promptTitle.textContent = "准备开始";
    els.targetText.textContent = "请先在左侧选择难度星级和内容分类，系统会加载对应的影像行业训练段落。";
    return;
  }
  selectCurrentPrompt();
  renderPromptInfo();
  renderTarget(false);
}

function validateSetup(showMessage = true) {
  const missing = [];
  if (Number(els.difficultyRange.value) < 1) missing.push("难度星级");
  if (!els.categorySelect.value) missing.push("内容分类");

  if (missing.length) {
    if (showMessage) {
      els.setupNotice.textContent = `请先选择${missing.join("和")}，再开始训练。`;
      els.setupNotice.classList.remove("ready");
      els.setupNotice.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    return false;
  }

  return true;
}

function updateSetupNotice() {
  if (!els.setupNotice) return;
  const ready = Number(els.difficultyRange.value) > 0 && Boolean(els.categorySelect.value);
  updateArticleCategoryGuideState();
  els.setupNotice.classList.toggle("ready", ready);
  els.setupNotice.textContent = ready
    ? "已选择难度和内容分类，可以开始训练。"
    : "请先选择难度星级和内容分类，再开始练习或考试。";
  renderSelectedPrompt();
}

function updateArticleCategoryGuideState() {
  els.articleCategoryGuide.querySelectorAll(".category-chip").forEach((button) => {
    button.classList.toggle("active", button.textContent === els.categorySelect.value);
  });
}

function renderPromptInfo() {
  if (!state.current) return;
  els.promptMeta.textContent = `${state.current.category} · ${state.current.difficulty} 星 · ${state.comparableTargetChars.length} 字`;
  els.promptTitle.textContent = state.current.title;
}

function renderTarget(showFeedback) {
  if (!state.current) return;
  const chars = state.comparableTargetChars;
  const inputChars = [...getEvaluationInput()];
  const visibleRange = getVisibleRange(chars, inputChars.length, getLineCharLimit());
  const visibleChars = chars.slice(visibleRange.start, visibleRange.end);

  if (state.mode === "exam" || !showFeedback) {
    els.targetText.textContent = visibleChars.join("");
    return;
  }

  els.targetText.innerHTML = visibleChars
    .map((char, index) => {
      const targetIndex = visibleRange.start + index;
      let className = "";
      if (targetIndex < inputChars.length) {
        className = inputChars[targetIndex] === char ? "correct" : "incorrect";
      } else if (targetIndex === inputChars.length) {
        className = "current";
      }
      return `<span class="${className}">${escapeHtml(char)}</span>`;
    })
    .join("");
}

function getVisibleRange(chars, inputLength, lineCharLimit) {
  if (!chars.length) return { start: 0, end: 0 };
  const safeIndex = Math.min(inputLength, chars.length - 1);
  const start = Math.floor(safeIndex / lineCharLimit) * lineCharLimit;
  return { start, end: Math.min(chars.length, start + lineCharLimit * ARTICLE_VISIBLE_LINES) };
}

function getLineCharLimit() {
  const styles = window.getComputedStyle(els.targetText);
  const fontSize = parseFloat(styles.fontSize) || 24;
  const paddingX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const contentWidth = Math.max(0, els.targetText.clientWidth - paddingX);
  const estimatedChineseCharWidth = fontSize * 1.06;
  return Math.max(8, Math.floor(contentWidth / estimatedChineseCharWidth) || DEFAULT_LINE_CHAR_LIMIT);
}

function getEvaluationInput() {
  const input = state.isComposing ? state.compositionBaseValue : els.typingInput.value;
  return normalizeTypingText(input);
}

function getComparableTarget() {
  return state.comparableTarget;
}

function normalizeTypingText(text) {
  return text.replace(/\s+/g, "");
}

function handleCompositionStart() {
  state.isComposing = true;
  state.compositionBaseValue = els.typingInput.value;
}

function handleCompositionEnd() {
  state.isComposing = false;
  state.compositionBaseValue = "";
  handleInput();
}

function handleInput() {
  if (!state.current || state.finished) return;
  renderTarget(true);
  updateMetrics();

  if (!state.isComposing && state.mode === "practice" && getEvaluationInput() === getComparableTarget()) {
    finishSession("完成");
  }
}

function startTimer() {
  stopTimer();
  state.timer = window.setInterval(() => {
    updateMetrics();
    if (state.mode === "exam") {
      updateCountdown();
      if (Date.now() >= state.examEndsAt) {
        finishSession("时间到");
      }
    }
  }, 250);
}

function stopTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function finishSession(reason) {
  if (state.finished || !state.current) return;
  state.finished = true;
  stopTimer();
  els.typingInput.disabled = true;
  renderTarget(state.mode === "practice");
  const stats = calculateStats();
  const grade = getGrade(stats.accuracy, stats.speed);
  els.resultTitle.textContent = `${reason}，评级：${grade}`;
  els.resultText.textContent = `速度 ${stats.speed} 字/分，正确率 ${stats.accuracy}%，错误 ${stats.errors} 个，标点错误 ${stats.punctuationErrors} 个。${getAdvice(stats)}`;

  if (state.mode === "exam") {
    saveExam(stats, grade);
    renderHistory();
  }
}

function calculateStats() {
  const input = getEvaluationInput();
  const targetChars = state.comparableTargetChars;
  const inputChars = [...input];
  const elapsedSeconds = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
  let errors = 0;
  let punctuationErrors = 0;
  const length = Math.max(inputChars.length, targetChars.length);

  for (let i = 0; i < length; i += 1) {
    const expected = targetChars[i] ?? "";
    const actual = inputChars[i] ?? "";
    if (actual !== expected) {
      errors += 1;
      if (isPunctuation(expected) || isPunctuation(actual)) {
        punctuationErrors += 1;
      }
    }
  }

  const correct = Math.max(0, targetChars.length - errors);
  const accuracy = targetChars.length ? Math.max(0, Math.round((correct / targetChars.length) * 100)) : 100;
  const speed = Math.round((inputChars.length / elapsedSeconds) * 60);
  const progress = targetChars.length
    ? Math.min(100, Math.round((inputChars.length / targetChars.length) * 100))
    : 0;

  return { elapsedSeconds, errors, punctuationErrors, accuracy, speed, progress };
}

function updateMetrics() {
  const stats = state.current
    ? calculateStats()
    : { elapsedSeconds: 0, errors: 0, punctuationErrors: 0, accuracy: 100, speed: 0, progress: 0 };
  els.timeMetric.textContent = formatTime(stats.elapsedSeconds);
  els.speedMetric.textContent = `${stats.speed} 字/分`;
  els.accuracyMetric.textContent = `${stats.accuracy}%`;
  els.errorMetric.textContent = String(stats.errors);
  els.punctMetric.textContent = String(stats.punctuationErrors);
  els.progressBar.style.width = `${stats.progress}%`;
}

function updateCountdown() {
  if (state.mode !== "exam" || !state.examEndsAt) return;
  const remaining = Math.max(0, Math.ceil((state.examEndsAt - Date.now()) / 1000));
  els.examCountdown.textContent = formatTime(remaining);
}

function getGrade(accuracy, speed) {
  if (accuracy >= 96 && speed >= 80) return "优秀";
  if (accuracy >= 90 && speed >= 55) return "良好";
  if (accuracy >= 82 && speed >= 35) return "合格";
  return "需加强";
}

function getAdvice(stats) {
  if (stats.punctuationErrors >= 3) return "建议下一轮重点练中文标点、英文符号和参数格式。";
  if (stats.accuracy < 85) return "建议先降低 1-2 星，稳住准确率再提速度。";
  if (stats.speed < 40) return "准确率可以后，下一步练固定节奏和连续输入。";
  return "表现稳定，可以尝试更高星级或考试窗口。";
}

function saveExam(stats, grade) {
  const records = getHistory();
  records.unshift({
    name: els.studentName.value.trim() || "未填写姓名",
    date: new Date().toLocaleString("zh-CN"),
    title: state.current.title,
    difficulty: state.current.difficulty,
    category: state.current.category,
    speed: stats.speed,
    accuracy: stats.accuracy,
    errors: stats.errors,
    punctuationErrors: stats.punctuationErrors,
    grade,
  });
  localStorage.setItem("typingExamHistory", JSON.stringify(records.slice(0, 12)));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("typingExamHistory")) ?? [];
  } catch {
    return [];
  }
}

function renderHistory() {
  const records = getHistory();
  els.historyList.innerHTML = "";
  if (!records.length) {
    const empty = document.createElement("li");
    empty.className = "muted";
    empty.textContent = "暂无考试记录。";
    els.historyList.appendChild(empty);
    return;
  }

  records.forEach((record) => {
    const item = document.createElement("li");
    item.textContent = `${record.name}｜${record.category} ${record.difficulty} 星｜${record.speed} 字/分｜正确率 ${record.accuracy}%｜${record.grade}｜${record.date}`;
    els.historyList.appendChild(item);
  });
}

function clearHistory() {
  localStorage.removeItem("typingExamHistory");
  renderHistory();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function isPunctuation(char) {
  return /[，。！？；：、“”‘’（）《》,.!?;:'"()[\]\/-]/.test(char);
}

function escapeHtml(char) {
  return char
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

init();
