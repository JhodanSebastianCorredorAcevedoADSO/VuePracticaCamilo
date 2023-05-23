export default{
    data(){
        return{
            frase: '',
            frasefinal: ''
        };
    },
    methods:{
        Encriptar(){
            this.frasefinal = this.frase.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat')
        },
        Desencriptar(){
            this.frasefinal = this.frase.replace(/ai/, 'a').replace(/enter/, 'e').replace(/imes/, 'i').replace(/ober/, 'o').replace(/ufat/, 'u')
        }
    }
}