import { StyleSheet, PixelRatio } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
//colors
var principal = 'black';
var secundario = 'white';
var inputs_color= 'gray'
// Declaracion de colores para los textos
var textColorPrincipal = 'white';
var textColorSecundario = 'yellow';
var textColorURL = 'blue';
//Declaracion de tamaños de textos
var FONT_BACK_LABEL= 18;
var TITULO_LABEL= 25;
var ENCABEZADO_lABEL = 45;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 12;
  TITULO_LABEL= 20;
}
export const style = StyleSheet.create({
    main_background:{
        backgroundColor: principal,
        width: '100%',
        height: '100%',
    },
    main_login_screen:{
        alignItems: 'center',
        paddingTop: '10%'
    },
    main_screen:{
        alignItems: 'center',
    },
    main_login_inputs:{
        width: '100%',
        height: '50%',
        marginHorizontal: '10%',
        borderRadius: 10,
        backgroundColor: inputs_color,
    },
    main_login_inputs_box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '15%',
        paddingHorizontal: '10%',
        backgroundColor: principal,
        marginBottom: '5%'
    },
    main_login_inputs_title:{
        fontSize: TITULO_LABEL,
        color: textColorPrincipal,
        backgroundColor: principal,
        width: '100%',  
    },
    main_login_text:{
        color: textColorPrincipal,
        fontSize: ENCABEZADO_lABEL,
        fontWeight: 'bold',
        marginBottom: '10%'
    },
    main_login_button_fondo:{
        width: '80%',
        marginHorizontal: '10%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: '10%'
    },
    main_login_button_texto:{
        fontSize: FONT_BACK_LABEL,
    },
    button_background_white:{backgroundColor: secundario},
    button_background_gray:{backgroundColor: inputs_color},
    header_main: { flexDirection: 'row', width: '100%', height: '7%', justifyContent: 'center', alignItems:'center', paddingVertical: '1%'},
    header_touchableOpacity: {width: '10%', height: '70%',marginVertical: '15%', alignSelf: 'center'},
    header_arrowImg: {tintColor:secundario, transform: [{ rotateZ: "180deg" }], width: '100%', height: '100%', alignSelf: 'center'},
    header_textTitle: { color: secundario, width: '90%', textAlign: 'center', fontSize: TITULO_LABEL }
})  