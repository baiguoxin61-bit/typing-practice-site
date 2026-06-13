const categories = [
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

const bank = [
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

const state = {
  mode: "practice",
  current: null,
  currentIndex: -1,
  startedAt: null,
  timer: null,
  examEndsAt: null,
  finished: false,
  isComposing: false,
  compositionBaseValue: "",
};

const els = {
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
  modeBtns: document.querySelectorAll(".mode-btn"),
};

function init() {
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.categorySelect.appendChild(option);
  });

  for (let i = 0; i < 10; i += 1) {
    els.starMeter.appendChild(document.createElement("span"));
  }

  bindEvents();
  updateDifficulty();
  updateMode("practice");
  renderHistory();
}

function bindEvents() {
  els.categorySelect.addEventListener("change", () => {
    resetChapterPosition();
    updateSetupNotice();
  });
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
  [...els.starMeter.children].forEach((star, index) => {
    star.classList.toggle("active", index < value);
  });
  updateSetupNotice();
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
  let candidates = bank.filter((item) => item.difficulty === difficulty);
  if (category) {
    candidates = candidates.filter((item) => item.category === category);
  }
  if (!candidates.length) {
    candidates = bank.filter((item) => Math.abs(item.difficulty - difficulty) <= 1);
  }
  return candidates;
}

function moveChapter(direction) {
  if (!validateSetup()) return;
  const candidates = getCandidates();
  if (!candidates.length) return;
  state.currentIndex = (state.currentIndex + direction + candidates.length) % candidates.length;
  state.current = candidates[state.currentIndex];
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
  state.current = candidates[state.currentIndex];
}

function renderSelectedPrompt() {
  if (!validateSetup(false)) {
    state.current = null;
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
  els.setupNotice.classList.toggle("ready", ready);
  els.setupNotice.textContent = ready
    ? "已选择难度和内容分类，可以开始训练。"
    : "请先选择难度星级和内容分类，再开始练习或考试。";
  renderSelectedPrompt();
}

function renderPromptInfo() {
  if (!state.current) return;
  els.promptMeta.textContent = `${state.current.category} · ${state.current.difficulty} 星`;
  els.promptTitle.textContent = state.current.title;
}

function renderTarget(showFeedback) {
  if (!state.current) return;
  const chars = [...getComparableTarget()];
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
  return { start, end: Math.min(chars.length, start + lineCharLimit) };
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
  return normalizeTypingText(state.current?.text ?? "");
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
  const target = getComparableTarget();
  const input = getEvaluationInput();
  const targetChars = [...target];
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
