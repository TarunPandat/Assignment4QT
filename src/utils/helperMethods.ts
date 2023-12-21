import { StyleSheet } from "react-native";

export const generateSpacingStyles = () => {

    let _styles: any = {};
    for(let i = 0, l = 10; i <= l; i++){
        _styles[`p${i}`] = {
            padding: i*2
        }
        _styles[`m${i}`] = {
            margin: i*2
        }
        _styles[`px${i}`] = {
            paddingHorizontal: i*2
        }
        _styles[`py${i}`] = {
            paddingVertical: i*2
        }
        _styles[`mx${i}`] = {
            marginHorizontal: i*2
        }
        _styles[`my${i}`] = {
            marginVertical: i*2
        }
        _styles[`mt${i}`] = {
            marginTop: i*2
        }
        _styles[`mb${i}`] = {
            marginBottom: i*2
        }
        _styles[`ml${i}`] = {
            marginLeft: i*2
        }
        _styles[`mr${i}`] = {
            marginRight: i*2
        }
        _styles[`pt${i}`] = {
            paddingTop: i*2
        }
        _styles[`pb${i}`] = {
            paddingBottom: i*2
        }
        _styles[`pl${i}`] = {
            paddingLeft: i*2
        }
        _styles[`pr${i}`] = {
            paddingRight: i*2
        }

    };

    return StyleSheet.create(_styles);
    
}

export const mergeStyles = (...styles: any) => {
    return styles.reduce((mergedStyle: any, style: any) => mergedStyle = {...mergedStyle, ...style}, {})
} 

export const borderStyles = () => {
    let _styles: any = {};

    for(let i = 0; i <=5; i++) {
        _styles[`b${i}`] = {
            borderWidth: i
        }
        _styles[`bt${i}`] = {
            borderTopWidth: i
        }
        _styles[`bb${i}`] = {
            borderBottomWidth: i
        }
        _styles[`bl${i}`] = {
            borderLeftWidth: i
        }
        _styles[`br${i}`] = {
            borderRightWidth: i
        }

    }
    return StyleSheet.create(_styles);
} 

export const borderRadiusStyles = () => {
    let _styles: any = {};

    for(let i = 0; i <=5; i++) {
        _styles[`brd${i}`] = {
            borderRadius: i*2
        }
        _styles[`brdtl${i}`] = {
            borderTopLeftRadius: i*2
        }
        _styles[`brdtr${i}`] = {
            borderTopRightRadius: i*2
        }
        _styles[`brdbl${i}`] = {
            borderBottomLeftRadius: i*2
        }
        _styles[`brdbr${i}`] = {
            borderBottomRightRadius: i*2
        }
        _styles[`brdt${i}`] = {
            borderTopLeftRadius: i*2,
            borderTopRightRadius: i*2
        }
        _styles[`brdb${i}`] = {
            borderBottomLeftRadius: i*2,
            borderBottomRightRadius: i*2
        }

    }
    return StyleSheet.create(_styles);
} 