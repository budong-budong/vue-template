/**
 * 堆垛机  地图 点位模拟数据
 * 显示坐标用 （mx, my, mz）
 * nodeType 为点位类型 0:储位,10:通用站台,11:单入站台,12:单出站台,2:禁用
 * fullFlag: 是否有货 0 无货 1 有货
 *
 * canvas的原点在左上角
 *  数据库里的地图原点是在左下角
 *  需要将数据库中的地图原点转化为canvas中原点 x => my / y => mx
 *  用法 import nodeList from '../../libs/simulationNodeData'
 */
export default [
  {id: 1, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 1, lz: 1, mx: 1, my: 1, mz: 1, fullFlag: '0'},
  {id: 5, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 2, lz: 1, mx: 1, my: 2, mz: 1, fullFlag: '0'},
  {id: 9, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 3, lz: 1, mx: 1, my: 3, mz: 1, fullFlag: '0'},
  {id: 13, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 4, lz: 1, mx: 1, my: 4, mz: 1, fullFlag: '0'},
  {id: 17, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 5, lz: 1, mx: 1, my: 5, mz: 1, fullFlag: '0'},
  {id: 21, mapId: 1, roadId: 12, nodeType: '11', lx: 1, ly: 6, lz: 1, mx: 1, my: 6, mz: 1, fullFlag: '0'},
  {id: 25, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 7, lz: 1, mx: 1, my: 7, mz: 1, fullFlag: '0'},
  {id: 29, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 8, lz: 1, mx: 1, my: 8, mz: 1, fullFlag: '0'},
  {id: 33, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 9, lz: 1, mx: 1, my: 9, mz: 1, fullFlag: '0'},
  {id: 37, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 10, lz: 1, mx: 1, my: 10, mz: 1, fullFlag: '0'},
  {id: 41, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 11, lz: 1, mx: 1, my: 11, mz: 1, fullFlag: '0'},
  {id: 45, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 12, lz: 1, mx: 1, my: 12, mz: 1, fullFlag: '0'},
  {id: 49, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 13, lz: 1, mx: 1, my: 13, mz: 1, fullFlag: '0'},
  {id: 53, mapId: 1, roadId: 12, nodeType: '12', lx: 1, ly: 14, lz: 1, mx: 1, my: 14, mz: 1, fullFlag: '0'},
  {id: 57, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 15, lz: 1, mx: 1, my: 15, mz: 1, fullFlag: '0'},
  {id: 61, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 16, lz: 1, mx: 1, my: 16, mz: 1, fullFlag: '0'},
  {id: 65, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 17, lz: 1, mx: 1, my: 17, mz: 1, fullFlag: '0'},
  {id: 69, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 18, lz: 1, mx: 1, my: 18, mz: 1, fullFlag: '0'},
  {id: 73, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 19, lz: 1, mx: 1, my: 19, mz: 1, fullFlag: '0'},
  {id: 77, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 20, lz: 1, mx: 1, my: 20, mz: 1, fullFlag: '0'},
  {id: 81, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 21, lz: 1, mx: 1, my: 21, mz: 1, fullFlag: '0'},
  {id: 85, mapId: 1, roadId: 12, nodeType: '0', lx: 1, ly: 22, lz: 1, mx: 1, my: 22, mz: 1, fullFlag: '0'},

  {id: 89, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 1, lz: 1, mx: 2, my: 1, mz: 1, fullFlag: '0'},
  {id: 93, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 2, lz: 1, mx: 2, my: 2, mz: 1, fullFlag: '0'},
  {id: 97, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 3, lz: 1, mx: 2, my: 3, mz: 1, fullFlag: '0'},
  {id: 101, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 4, lz: 1, mx: 2, my: 4, mz: 1, fullFlag: '0'},
  {id: 105, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 5, lz: 1, mx: 2, my: 5, mz: 1, fullFlag: '0'},
  {id: 109, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 6, lz: 1, mx: 2, my: 6, mz: 1, fullFlag: '0'},
  {id: 113, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 7, lz: 1, mx: 2, my: 7, mz: 1, fullFlag: '0'},
  {id: 117, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 8, lz: 1, mx: 2, my: 8, mz: 1, fullFlag: '0'},
  {id: 121, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 9, lz: 1, mx: 2, my: 9, mz: 1, fullFlag: '0'},
  {id: 125, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 10, lz: 1, mx: 2, my: 10, mz: 1, fullFlag: '0'},
  {id: 129, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 11, lz: 1, mx: 2, my: 11, mz: 1, fullFlag: '0'},
  {id: 133, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 12, lz: 1, mx: 2, my: 12, mz: 1, fullFlag: '0'},
  {id: 137, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 13, lz: 1, mx: 2, my: 13, mz: 1, fullFlag: '0'},
  {id: 141, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 14, lz: 1, mx: 2, my: 14, mz: 1, fullFlag: '0'},
  {id: 145, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 15, lz: 1, mx: 2, my: 15, mz: 1, fullFlag: '0'},
  {id: 149, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 16, lz: 1, mx: 2, my: 16, mz: 1, fullFlag: '0'},
  {id: 153, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 17, lz: 1, mx: 2, my: 17, mz: 1, fullFlag: '0'},
  {id: 157, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 18, lz: 1, mx: 2, my: 18, mz: 1, fullFlag: '0'},
  {id: 161, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 19, lz: 1, mx: 2, my: 19, mz: 1, fullFlag: '0'},
  {id: 165, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 20, lz: 1, mx: 2, my: 10, mz: 1, fullFlag: '0'},
  {id: 169, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 21, lz: 1, mx: 2, my: 21, mz: 1, fullFlag: '0'},
  {id: 173, mapId: 1, roadId: 12, nodeType: '0', lx: 3, ly: 22, lz: 1, mx: 2, my: 22, mz: 1, fullFlag: '0'},

  {id: 177, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 1, lz: 1, mx: 1, my: 1, mz: 1, fullFlag: '0'},
  {id: 181, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 2, lz: 1, mx: 1, my: 2, mz: 1, fullFlag: '0'},
  {id: 185, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 3, lz: 1, mx: 1, my: 3, mz: 1, fullFlag: '0'},
  {id: 189, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 4, lz: 1, mx: 1, my: 4, mz: 1, fullFlag: '0'},
  {id: 193, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 5, lz: 1, mx: 1, my: 5, mz: 1, fullFlag: '0'},
  {id: 197, mapId: 1, roadId: 13, nodeType: '11', lx: 4, ly: 6, lz: 1, mx: 1, my: 6, mz: 1, fullFlag: '0'},
  {id: 201, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 7, lz: 1, mx: 1, my: 7, mz: 1, fullFlag: '0'},
  {id: 205, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 8, lz: 1, mx: 1, my: 8, mz: 1, fullFlag: '0'},
  {id: 209, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 9, lz: 1, mx: 1, my: 9, mz: 1, fullFlag: '0'},
  {id: 213, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 10, lz: 1, mx: 1, my: 10, mz: 1, fullFlag: '0'},
  {id: 217, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 11, lz: 1, mx: 1, my: 11, mz: 1, fullFlag: '0'},
  {id: 221, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 12, lz: 1, mx: 1, my: 12, mz: 1, fullFlag: '0'},
  {id: 225, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 13, lz: 1, mx: 1, my: 13, mz: 1, fullFlag: '0'},
  {id: 229, mapId: 1, roadId: 13, nodeType: '12', lx: 4, ly: 14, lz: 1, mx: 1, my: 14, mz: 1, fullFlag: '0'},
  {id: 233, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 15, lz: 1, mx: 1, my: 15, mz: 1, fullFlag: '0'},
  {id: 237, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 16, lz: 1, mx: 1, my: 16, mz: 1, fullFlag: '0'},
  {id: 241, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 17, lz: 1, mx: 1, my: 17, mz: 1, fullFlag: '0'},
  {id: 245, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 18, lz: 1, mx: 1, my: 18, mz: 1, fullFlag: '0'},
  {id: 249, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 19, lz: 1, mx: 1, my: 19, mz: 1, fullFlag: '0'},
  {id: 253, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 20, lz: 1, mx: 1, my: 20, mz: 1, fullFlag: '0'},
  {id: 257, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 21, lz: 1, mx: 1, my: 21, mz: 1, fullFlag: '0'},
  {id: 261, mapId: 1, roadId: 13, nodeType: '0', lx: 4, ly: 22, lz: 1, mx: 1, my: 22, mz: 1, fullFlag: '0'},

  {id: 265, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 1, lz: 1, mx: 5, my: 1, mz: 1, fullFlag: '0'},
  {id: 269, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 2, lz: 1, mx: 5, my: 2, mz: 1, fullFlag: '0'},
  {id: 273, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 3, lz: 1, mx: 5, my: 3, mz: 1, fullFlag: '0'},
  {id: 277, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 4, lz: 1, mx: 5, my: 4, mz: 1, fullFlag: '0'},
  {id: 281, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 5, lz: 1, mx: 5, my: 5, mz: 1, fullFlag: '0'},
  {id: 285, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 6, lz: 1, mx: 5, my: 6, mz: 1, fullFlag: '0'},
  {id: 289, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 7, lz: 1, mx: 5, my: 7, mz: 1, fullFlag: '0'},
  {id: 293, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 8, lz: 1, mx: 5, my: 8, mz: 1, fullFlag: '0'},
  {id: 297, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 9, lz: 1, mx: 5, my: 9, mz: 1, fullFlag: '0'},
  {id: 301, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 10, lz: 1, mx: 5, my: 10, mz: 1, fullFlag: '0'},
  {id: 305, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 11, lz: 1, mx: 5, my: 11, mz: 1, fullFlag: '0'},
  {id: 309, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 12, lz: 1, mx: 5, my: 12, mz: 1, fullFlag: '0'},
  {id: 313, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 13, lz: 1, mx: 5, my: 13, mz: 1, fullFlag: '0'},
  {id: 317, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 14, lz: 1, mx: 5, my: 14, mz: 1, fullFlag: '0'},
  {id: 321, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 15, lz: 1, mx: 5, my: 15, mz: 1, fullFlag: '0'},
  {id: 325, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 16, lz: 1, mx: 5, my: 16, mz: 1, fullFlag: '0'},
  {id: 329, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 17, lz: 1, mx: 5, my: 17, mz: 1, fullFlag: '0'},
  {id: 333, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 18, lz: 1, mx: 5, my: 18, mz: 1, fullFlag: '0'},
  {id: 337, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 19, lz: 1, mx: 5, my: 19, mz: 1, fullFlag: '0'},
  {id: 341, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 20, lz: 1, mx: 5, my: 20, mz: 1, fullFlag: '0'},
  {id: 345, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 21, lz: 1, mx: 5, my: 21, mz: 1, fullFlag: '0'},
  {id: 349, mapId: 1, roadId: 13, nodeType: '0', lx: 6, ly: 22, lz: 1, mx: 5, my: 22, mz: 1, fullFlag: '0'},
];
