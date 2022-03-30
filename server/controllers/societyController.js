export const getSociety = async (request, response) => {
    const sqlSelect = "SELECT * FROM society";
    try {
        db.query(sqlSelect, (err, result) => {
            if (err) {
                console.log("err ===> ", err)
            } else {
                console.log("result ===> ", result)
                response.send(result);
            }
        })
    } catch (error) {
        response.status(404).json({ message : error.message});
    }
    
}