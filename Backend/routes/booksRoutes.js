const router = require("express").Router();
const bookModel = require("../models/BooksModel");




// Post Request
router.post("/add", async(req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "The Book has been added!" });
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
        
    }

})


//GET Request

router.get('/getBooks', async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({books});
        } catch (e) { 
          console.log('Error getting the books');
          console.log(e);
      };
    
});


//GET Request  by ID
router.get("/getBooks/:id", async(req,res) => {
    let book;
    const id = req.params.id;
    try {
       book = await bookModel.findById(id);
       res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});


// Update Book by ID
router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, genre, image, price } = req.body;
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(id, { bookname, description, author, genre, image, price }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json({ message: "Data Updated Successfully", book: updatedBook });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error updating book" });
    }
});

//  Delete a Book by ID
router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
       await bookModel.findByIdAndDelete(id).then(()=> res.status(201).json({ message:"Deleted successfully" }));
        
    } catch (error) {
        console.log("Delete Error");
    }
})




module.exports = router;