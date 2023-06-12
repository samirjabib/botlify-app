export default {
    name:'category',
    title:'Category',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            validation:(Rule:any) => Rule.required()
        },
        {
            name:'image',
            title:'Image',
            type:'url',
            validation:(Rule:any) => Rule.required()
        },
        {
            name:'image',
            title:'Image',
            type:'url',
            validation:(Rule:any) => Rule.required()
        },

    ],
    

}