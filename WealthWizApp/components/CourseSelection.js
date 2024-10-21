import * as React from "react";
import {StyleSheet, View, Image, Text, Pressable} from "react-native";
import { Color, Border, FontFamily, FontSize, Gap, Padding } from "../GlobalStyles";

const CourseSelection = () => {
  	
  	return (
    		<View style={styles.courseSelection}>
      			<View style={styles.scrollingBackground} />
      			<View style={styles.cellCourseParent}>
        				<Pressable style={styles.cellCourse} onPress={()=>{}}>
          					<View style={styles.name}>
            						<Image style={styles.piggyBank1Icon} resizeMode="cover" source="piggy-bank 1.png" />
            						<View style={styles.content}>
              							<Text style={styles.header}>Saving</Text>
              							<View style={styles.progressBars}>
                								<View style={styles.rectangle} />
                								<View style={[styles.progressBarsChild, styles.progressBorder]} />
              							</View>
            						</View>
          					</View>
          					<Text style={styles.text}>80%</Text>
        				</Pressable>
        				<View style={styles.cellCourse}>
          					<View style={styles.name}>
            						<Image style={styles.piggyBank1Icon} resizeMode="cover" source="finances 1.png" />
            						<View style={styles.content}>
              							<Text style={styles.header}>Credit (coming soon!)</Text>
              							<View style={styles.progressBars}>
                								<View style={styles.rectangle} />
                								<View style={[styles.progressBarsItem, styles.progressBorder]} />
              							</View>
            						</View>
          					</View>
          					<Text style={styles.text}>50%</Text>
        				</View>
        				<View style={styles.cellCourse}>
          					<View style={styles.name}>
            						<Image style={styles.piggyBank1Icon} resizeMode="cover" source="investment 1.png" />
            						<View style={styles.content}>
              							<Text style={styles.header}>Investing (coming soon!)</Text>
              							<View style={styles.progressBars}>
                								<View style={styles.rectangle} />
                								<View style={[styles.progressBarsInner, styles.progressBorder]} />
              							</View>
            						</View>
          					</View>
          					<Text style={styles.text}>30%</Text>
        				</View>
      			</View>
      			<Text style={styles.headerPopup}>Course Selection</Text>
      			<View style={styles.homeIndicator}>
        				<View style={[styles.background, styles.menuPosition]} />
        				<View style={[styles.seperator, styles.seperatorPosition]} />
      			</View>
      			<View style={[styles.mycourse, styles.mycourseLayout]}>
        				<View style={[styles.textParent, styles.textPosition]}>
          					<View style={styles.text3}>
            						<View style={styles.labelParent}>
              							<Text style={styles.label}>AI Generated</Text>
              							<Text style={[styles.cash, styles.cashTypo]}>MyCourse</Text>
              							<Text style={[styles.cateredToYour, styles.jumpBackInLayout]}>Catered to your interests!</Text>
            						</View>
          					</View>
          					<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
        				</View>
      			</View>
      			<Pressable style={[styles.currentCourse, styles.mycourseLayout]} onPress={()=>{}}>
        				<View style={[styles.textGroup, styles.textPosition]}>
          					<View style={styles.text4}>
            						<View style={styles.labelParent}>
              							<Text style={styles.label}>Saving</Text>
              							<Text style={[styles.cash1, styles.cashTypo]}>Level 8</Text>
              							<Text style={[styles.jumpBackIn, styles.jumpBackInLayout]}>Jump back in!</Text>
            						</View>
          					</View>
          					<Image style={styles.icon} resizeMode="cover" source="Icon.png" />
        				</View>
      			</Pressable>
      			<View style={[styles.menu, styles.menuPosition]}>
        				<View style={[styles.background, styles.menuPosition]}>
          					<Image style={styles.backgroundIcon} resizeMode="cover" source="Background.png" />
          					<View style={styles.homeIndicator1}>
            						<View style={[styles.background, styles.menuPosition]} />
            						<View style={[styles.seperator1, styles.seperatorPosition]} />
          					</View>
        				</View>
        				<Pressable style={styles.achivements} onPress={()=>{}}>
          					<Image style={[styles.trophyIcon, styles.iconLayout]} resizeMode="cover" source="Trophy.png" />
          					<Text style={[styles.achievements, styles.learn1Typo]}>Achievements</Text>
        				</Pressable>
        				<Pressable style={[styles.profile, styles.learnLayout]} onPress={()=>{}}>
          					<Image style={[styles.usercircleIcon, styles.iconLayout]} resizeMode="cover" source="UserCircle.png" />
          					<Text style={[styles.achievements, styles.learn1Typo]}>Profile</Text>
        				</Pressable>
        				<View style={[styles.learn, styles.learnLayout]}>
          					<Image style={[styles.bookopentextIcon, styles.iconLayout]} resizeMode="cover" source="BookOpenText.png" />
          					<Text style={[styles.learn1, styles.learn1Typo]}>Learn</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	progressBorder: {
    		borderColor: Color.inkLightGray,
    		backgroundColor: Color.vibrantGreen,
    		borderRadius: Border.br_mini,
    		bottom: "4.55%",
    		top: "-4.55%",
    		borderWidth: 1,
    		borderStyle: "solid",
    		left: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	menuPosition: {
    		bottom: "0%",
    		left: "0%",
    		right: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	seperatorPosition: {
    		borderRadius: Border.br_81xl,
    		left: "50%",
    		position: "absolute"
  	},
  	mycourseLayout: {
    		overflow: "hidden",
    		borderRadius: Border.br_xs,
    		bottom: "66.43%",
    		top: "17.56%",
    		width: "43.64%",
    		height: "16.01%",
    		position: "absolute"
  	},
  	textPosition: {
    		justifyContent: "space-between",
    		top: "50%",
    		marginTop: -34.95,
    		alignItems: "center",
    		flexDirection: "row",
    		left: "50%",
    		position: "absolute"
  	},
  	cashTypo: {
    		color: Color.primary20,
    		fontFamily: FontFamily.doubleExtraLargeTextMedium,
    		fontWeight: "500",
    		display: "flex",
    		textAlign: "left",
    		alignItems: "center"
  	},
  	jumpBackInLayout: {
    		height: 15,
    		fontFamily: FontFamily.robotoRegular,
    		lineHeight: 30,
    		color: Color.black0,
    		display: "flex",
    		letterSpacing: 0,
    		textAlign: "left",
    		alignItems: "center"
  	},
  	iconLayout: {
    		width: "35.43%",
    		height: "64%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		overflow: "hidden",
    		position: "absolute"
  	},
  	learn1Typo: {
    		fontFamily: FontFamily.titleCaptionCaption112,
    		lineHeight: 16,
    		textDecoration: "underline",
    		top: "66%",
    		fontSize: FontSize.titleCaptionCaption112_size,
    		textAlign: "center",
    		display: "flex",
    		justifyContent: "center",
    		alignItems: "center",
    		left: "0%",
    		position: "absolute",
    		width: "100%"
  	},
  	learnLayout: {
    		width: "25.06%",
    		height: 50,
    		top: 0,
    		position: "absolute"
  	},
  	scrollingBackground: {
    		borderTopLeftRadius: Border.br_smi,
    		borderTopRightRadius: Border.br_smi,
    		backgroundColor: Color.black0,
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		top: "0%",
    		height: "100%",
    		position: "absolute",
    		width: "100%"
  	},
  	piggyBank1Icon: {
    		width: 55,
    		height: 55
  	},
  	header: {
    		fontFamily: FontFamily.doubleExtraLargeTextRegular,
    		color: Color.inkDark,
    		textAlign: "left",
    		lineHeight: 26,
    		fontSize: FontSize.doubleExtraLargeTextMedium_size,
    		alignSelf: "stretch"
  	},
  	rectangle: {
    		width: "105.03%",
    		right: "-5.03%",
    		borderRadius: Border.br_base,
    		backgroundColor: Color.inkLightGray,
    		bottom: "4.55%",
    		top: "-4.55%",
    		left: "0%",
    		height: "100%",
    		position: "absolute"
  	},
  	progressBarsChild: {
    		width: "89.45%",
    		right: "10.55%"
  	},
  	progressBars: {
    		width: 199,
    		height: 11
  	},
  	content: {
    		width: 250,
    		gap: Gap.gap_lg,
    		justifyContent: "center"
  	},
  	name: {
    		width: 313,
    		gap: Gap.gap_md,
    		alignItems: "center",
    		alignSelf: "stretch",
    		flexDirection: "row"
  	},
  	text: {
    		lineHeight: 20,
    		fontFamily: FontFamily.poppinsRegular,
    		color: Color.colorBlack,
    		width: 30,
    		height: 26,
    		display: "flex",
    		letterSpacing: 0,
    		fontSize: FontSize.size_3xs,
    		textAlign: "left",
    		alignItems: "center"
  	},
  	cellCourse: {
    		borderRadius: Border.br_5xs,
    		borderColor: Color.colorLightgray,
    		height: 84,
    		alignItems: "flex-end",
    		justifyContent: "flex-end",
    		paddingLeft: Padding.p_xs,
    		paddingTop: Padding.p_5xs,
    		paddingRight: Padding.p_5xs,
    		paddingBottom: Padding.p_5xs,
    		flexDirection: "row",
    		borderWidth: 1,
    		borderStyle: "solid",
    		width: 363,
    		backgroundColor: Color.black0
  	},
  	progressBarsItem: {
    		width: "52.26%",
    		right: "47.74%"
  	},
  	progressBarsInner: {
    		width: "30.15%",
    		right: "69.85%"
  	},
  	cellCourseParent: {
    		height: "47.84%",
    		marginLeft: -181.5,
    		top: "37.52%",
    		bottom: "14.64%",
    		gap: 13,
    		width: 363,
    		left: "50%",
    		position: "absolute"
  	},
  	headerPopup: {
    		height: "4.47%",
    		width: "66.41%",
    		top: "7.75%",
    		left: "16.79%",
    		color: "#43463f",
    		textAlign: "center",
    		fontFamily: FontFamily.doubleExtraLargeTextMedium,
    		fontWeight: "500",
    		display: "flex",
    		lineHeight: 26,
    		fontSize: FontSize.doubleExtraLargeTextMedium_size,
    		justifyContent: "center",
    		alignItems: "center",
    		position: "absolute"
  	},
  	background: {
    		left: "0%",
    		top: "0%",
    		height: "100%",
    		bottom: "0%"
  	},
  	seperator: {
    		marginLeft: -36.35,
    		bottom: 13,
    		backgroundColor: "rgba(38, 50, 56, 0.43)",
    		width: 70,
    		height: 4
  	},
  	homeIndicator: {
    		height: "5.86%",
    		width: "51.07%",
    		top: "0.34%",
    		right: "24.5%",
    		bottom: "93.8%",
    		left: "24.43%",
    		position: "absolute"
  	},
  	label: {
    		lineHeight: 18,
    		width: 93,
    		height: 20,
    		color: Color.black0,
    		fontSize: FontSize.titleCaptionCaption112_size,
    		fontFamily: FontFamily.doubleExtraLargeTextMedium,
    		fontWeight: "500",
    		display: "flex",
    		textAlign: "left",
    		alignItems: "center"
  	},
  	cash: {
    		fontSize: 18,
    		lineHeight: 23,
    		width: 98
  	},
  	cateredToYour: {
    		fontSize: 9,
    		width: 104
  	},
  	labelParent: {
    		gap: Gap.gap_sm,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	text3: {
    		height: 68,
    		width: 104
  	},
  	icon: {
    		width: 48,
    		height: 48
  	},
  	textParent: {
    		marginLeft: -66.75,
    		width: 141
  	},
  	mycourse: {
    		right: "3.98%",
    		left: "52.38%",
    		backgroundColor: "#0693f1"
  	},
  	cash1: {
    		height: 23,
    		width: 100,
    		lineHeight: 26,
    		fontSize: FontSize.doubleExtraLargeTextMedium_size,
    		color: Color.primary20
  	},
  	jumpBackIn: {
    		width: 92,
    		fontSize: FontSize.size_3xs,
    		fontFamily: FontFamily.robotoRegular,
    		lineHeight: 30
  	},
  	text4: {
    		width: 100,
    		height: 68
  	},
  	textGroup: {
    		marginLeft: -65.75,
    		width: 140
  	},
  	currentCourse: {
    		right: "52.39%",
    		left: "3.97%",
    		backgroundColor: Color.green2
  	},
  	backgroundIcon: {
    		right: 0,
    		bottom: 0,
    		maxHeight: "100%",
    		maxWidth: "100%",
    		left: 0,
    		top: 0,
    		overflow: "hidden",
    		position: "absolute"
  	},
  	seperator1: {
    		marginLeft: -67,
    		bottom: 10,
    		backgroundColor: Color.colorGray,
    		width: 134,
    		height: 5
  	},
  	homeIndicator1: {
    		top: 52,
    		left: 16,
    		width: 360,
    		height: 31,
    		position: "absolute"
  	},
  	trophyIcon: {
    		top: "4.65%",
    		right: "32.27%",
    		bottom: "31.35%",
    		left: "32.3%"
  	},
  	achievements: {
    		color: Color.colorGray
  	},
  	achivements: {
    		marginLeft: -49.5,
    		width: 99,
    		height: 50,
    		top: 0,
    		left: "50%",
    		position: "absolute"
  	},
  	usercircleIcon: {
    		top: "6%",
    		right: "32.16%",
    		bottom: "30%",
    		left: "32.41%"
  	},
  	profile: {
    		left: "74.93%",
    		right: "0%",
    		width: "25.06%"
  	},
  	bookopentextIcon: {
    		top: "5.89%",
    		right: "32.1%",
    		bottom: "30.11%",
    		left: "32.46%"
  	},
  	learn1: {
    		color: Color.vibrantGreen
  	},
  	learn: {
    		right: "74.94%",
    		left: "0%"
  	},
  	menu: {
    		height: "12.79%",
    		top: "87.21%",
    		left: "0%"
  	},
  	courseSelection: {
    		flex: 1,
    		height: 649,
    		width: "100%"
  	}
});

export default CourseSelection;