import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'
import {loadSeach, loadPlay} from '../common/js/cache'
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
    searchHistory: loadSeach(),
    playHistory: loadPlay()
}
export default state