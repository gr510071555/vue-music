import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'
import { loadSeach } from '../common/js/cache'
const state = {
    singer: {},
    playing: false,
    fullScreen: false,
    playList: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {},
    topList: {},
    searchHistory: loadSeach()
}
export default state