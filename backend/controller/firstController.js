const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    node: 'http://localhost:9200'
}) 

exports.controller1 = async (req, res, next) => {

    const { searchWord }= await req.body
   try
   { const {body} = await client.search({
        index: 'kibana_sample_data_ecommerce',
        body:{
            query:{
               bool:{
                   should: [{
                       wildcard: {
                           customer_full_name: {
                               value : `*${searchWord}*`,
                               boost: 10
                           }
                       }
                   },{
                       wildcard: {
                           manufacturer: {
                               value: `*${searchWord}*`,
                               boost: 5
                           }
                       }
                   },{
                       wildcard: {
                           category: {
                               value: `*${searchWord}*`,
                               boost: 3
                           }
                       }
                   },{
                       wildcard: {
                           "products.product_name": {
                              value: `*${searchWord}*`,
                              boost: 2
                           }
                       }
                   }
                ]
               }
            }
        } 
    })  
        res.status(201).json({
        "hits" : body.hits.hits,
        "countFromController": body.hits.total.value   
    })
    }catch(err) {
        res.status(500).json({
            "message" : "Not found"
        })
    }

}