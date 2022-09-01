import foundMusicSlice from './slices/found-music/foundMusicSlice';
import contentLeftSlice from './slices/content-left';
import themeSlice from './slices/theme';
import songlistSlice from './slices/songlist-inform';
import userInformSlice from './slices/user-inform';
import playlistSlice from './slices/play-list';

const reducer = {
  songlistSlice,
  themeSlice,
  contentLeftSlice,
  foundMusicSlice,
  userInformSlice,
  playlistSlice
}

export default reducer;