import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        trendingSongs: null,
        randomSongs: null,
        top50: null,
        searchedSongs: null,
        rommanceHitsHindi2024: null,
        BOFTelugu: null,
        MSSTelugu: null,
        MSSHindi: null,
        CFIHindi: null,
        CFITelugu: null,
        TFSongs: null,
        SPBHits: null
    },
    reducers: {
        addTrendingSongs: (state, action) => {
            state.trendingSongs = action.payload;
        },
        addRandomSongs: (state, action) => {
            state.randomSongs = action.payload;
        },
        addTop50: (state, action) => {
            state.top50 = action.payload;
        },
        fetchSearchSongs: (state, action) => {
            state.searchedSongs = action.payload;
        },
        addRommanceHitsHindi2024: (state, action) => {
            state.rommanceHitsHindi2024 = action.payload;
        },
        addBOFTelugu: (state, action) => {
            state.BOFTelugu = action.payload;
        },
        addMSSTelugu: (state, action) => {
            state.MSSTelugu = action.payload;
        },
        addMSSHindi: (state, action) => {
            state.MSSHindi = action.payload;
        },
        addCFIHindi: (state, action) => {
            state.CFIHindi = action.payload;
        },
        addCFITelugu: (state, action) => {
            state.CFITelugu = action.payload;
        },
        addTFSongs: (state, action) => {
            state.TFSongs = action.payload;
        },
        addSPBHits: (state, action) => {
            state.SPBHits = action.payload;
        }
    }
});

export const {addTrendingSongs, addRandomSongs, addTop50, fetchSearchSongs, addRommanceHitsHindi2024, addBOFTelugu, addMSSHindi, addMSSTelugu, addTFSongs, addSPBHits, addCFIHindi, addCFITelugu} = songsSlice.actions;
export default songsSlice.reducer;

// 101704478