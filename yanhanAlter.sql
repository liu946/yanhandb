
UPDATE `tingyuanyujianzhu` SET `JZSNHJRHJWQBWGRLeiXing`='',`JZSNHJRHJWQBWGRCaiLiao`='',`JZSNHJRHJWQBWGRHouDu`='' WHERE `JZSNHJRHJWWHJGGRYBWYouWuWaiQiangBaoWenGeRe`=0;
UPDATE `tingyuanyujianzhu` SET `JZSNHJRHJWDBWGRLeiXing`='',`JZSNHJRHJWDBWGRCaiLiao`='',`JZSNHJRHJWDBWGRHouDu`='' WHERE `JZSNHJRHJYouWuWuDingBaoWenGeRe`=0;
UPDATE `tingyuanyujianzhu` SET `JZWBTZTJBiaoMianCaiLiao`='',`JZWBTZTJYanSe`='' WHERE `JZWBTZYouWuTaiJi`=0;

UPDATE `tingyuanyujianzhu` SET `JZJBXXZongJianZhuMianJi`=NULL WHERE `JZJBXXZongJianZhuMianJi`=0;
UPDATE `tingyuanyujianzhu` SET `JZJBXXJianZhuJiDiMianJi`=NULL WHERE `JZJBXXJianZhuJiDiMianJi`=0;
UPDATE `tingyuanyujianzhu` SET `JZJBXXDiXiaKongJianMianJi`=NULL WHERE `JZJBXXDiXiaKongJianMianJi`=0;
UPDATE `tingyuanyujianzhu` SET `JZJBXXTingYuanMianJi`=NULL WHERE `JZJBXXTingYuanMianJi`=0;

ALTER TABLE `tingyuanyujianzhu` ADD `JZSNHJSNKQPZQiLiuZuZhi` VARCHAR(100) NOT NULL DEFAULT '' AFTER `JZSNHJSNKQPZYXGLXiYanKongZhi`;
ALTER TABLE `tingyuanyujianzhu` CHANGE `ZYYCLLYSZYBHYSLYWSZLYYuShuiLiYongXiTong` `ZYYCLLYSZYBHYSLYYuShuiLiYongXiTong` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;
ALTER TABLE `tingyuanyujianzhu` CHANGE `SGGLGCGLGongChengJunGongYanShouQianYouJianSheDanWeiZuZhiYouGuanZ` `SGGLGCGLDongQiShiGongGuoChengZhongCaiQuHeLiJiShuCuoShi` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL;
