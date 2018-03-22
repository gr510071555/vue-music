import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({}, commonParams, {
        g_tk: 5731537,
        needNewCode: 1,
        platform: 'h5'
    })
    return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
    const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
    const data = Object.assign({}, commonParams, {
        w: query,
        p: page,
        catZhida: zhida ? 1 : 0,
        zhidaqu: 1,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        sem: 1,
        aggr: 0,
        perpage: perpage,
        n: perpage,
        platform: 'h5',
        needNewCode: 1,
        uin: 0,
        format: 'jsonp',
        remoteplace: 'txt.mqq.all'
    })
    return jsonp(url, data, options)
}