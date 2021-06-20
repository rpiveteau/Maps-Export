import {DOMParser} from 'xmldom';
import {fetchDatas} from './lib';
const {kml} = require("@tmcw/togeojson");

export default async (link: string) =>
  kml(new DOMParser().parseFromString(await fetchDatas(link), 'application/xhtml+xml'))
