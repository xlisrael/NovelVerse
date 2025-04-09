import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/novels/';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createNovel = async (novelData) => {
    // try {
    //     const response = await api.post('/', novelData);
    //     return response.data;
    // } catch (error) {
    //     console.error('Error creating novel:', error.response?.data || error.message);
    //     throw error;
    // }

    try {
        const response = await api.post("/", novelData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating novel:", error.response?.data || error.message);
        throw error;
    }
};


export const fetchNovels = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching novels:', error);
        return [];
    }
};

// export const updateNovel = async (id, data) => {
//     try {
//         const response = await api.patch(`${id}/`, data);  // ✅ Update novel with PATCH
//         return response.data;
//     } catch (error) {
//         console.error('Error updating novel:', error.response?.data || error.message);
//         throw error;
//     }
// };

export const updateNovel = async (id, novelData) => {
    try {
        const response = await api.patch(`/${id}/`, JSON.stringify(novelData), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating novel:", error.response?.data || error.message);
        throw error;
    }
};



// export const fetchNovelById = async (id) => {
//   try {
//     const response = await fetch(`https://127.0.0.1:8000/api/novels/${id}`);
//     if (!response.ok) throw new Error("Failed to fetch novel");
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

export const fetchNovelById = async (id) => {
  try {
    // const response = await fetch(`http://127.0.0.1:8000/api/novels/${id}/`);
    const response = await api.get(`${id}/`);
    // if (!response.ok) {
    //   throw new Error("Failed to fetch novel");
    // }
      // return await response.json();
    return response.data;
  } catch (error) {
    console.error("Error in fetchNovelById:", error);
    throw error;
  }
};


export default api;

