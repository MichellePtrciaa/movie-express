import movieModel from "../model/movieModel.js";

export const listmovies = async (req, res)=>{
    try {
        const movies = await movieModel.find({});;

        return res.status (200).json({
            message : "List semua movie",
            data : movies,
        });
        
    }catch(error){
        return res.status(500).json({
            message : "Error",
            error : error.message,
            data : null,
        });
    }
};

export const addMovie = async (req, res)=>{
    try {
        const request = req.body

        const response = await movieModel.create({
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
        })
        res.status(201).json({
            message: "Movie berhasil dibuat",
            data: response
        })
}catch (error) {
        res.status(500).json({
            message: error.message,
            data: null

        })
    }
}
export const updateMovie = async (req, res) => {
    try {
        const id = req.params?.id
        const request = req.body
        if (!id) {
            return res.status(500).json({
                message: "Id movie wajib di isi",
                data: null
            })
        }
        const response = await movieModel.findByIdAndUpdate(id, {
            judul : request.judul,
            tahunRilis : request.tahunRilis,
            sutradara : request.sutradara
        })

        if (!response) {
            return res.status(500).json({
                message: "Movie gagal di update",
                data: null
            })
        }
        return res.status(200).json({
            message: "Movie berhasil di update",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }

}
export const detailMovie = async (req, res)=>{
    try {
        const id = req.params?.id
       
        if (!id) {
            return res.status(400).json({
                message: "Id movie wajib di isi",
                data: null,
            })
        }
    const movie = await movieModel.findById(id);
    if(!movie){
        return res.status(404).json({
            message: "Movie tidak ditemiukan",
            data: null,
        })
    }
    return res.status(200).json({
            message: "Detail Movie",
            data: movie,
        })
    }catch (error) {
        return res.status(500).json({
            message: "Terjadi kesalahan pada server",
            error: error.message,
            data: null,
        })
    }
}
export const deleteMovie = async (req, res)=>{
    try{
        const id = req.params.id

        if(!id){
            return res.status (500).json({
                message : "ID move wajid di isi",
                data : null,
            })
        }
        const movie = await movieModel.findById(id);
        if (movie) {
            return res.status(200).json({
                message: "Movie berhasil dihapus",
                data: null
            })
        }
        return res.status(404).json({
            message: "Movie tidak ditemukan",
            data: null
        })
    }catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }
}

