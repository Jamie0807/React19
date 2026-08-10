// 1.解析URL参数
// let url = 'http://xxx.geely.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

// parseParam(url)

// /* 结果
// {
//   user: 'anonymous',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京',// 中文需解码
//   enabled: true, // 未指定值得 key 约定为 true
// }*/


// 2.数组反转
// // 输入
// const arr = [[1,2,3],[4,5,6],[7,8,9]]
// // 期望输出[[1,4,7],[2,5,8],[3,6,9]]
// function reverse(arr){

// }

export function parseParam(url) {
  // 取出 ? 后面的参数字符串
  const queryStr = url.split('?')[1];
  const res = {};
  if (!queryStr) return res;
  const params = queryStr.split('&');

  params.forEach(item => {
    let [key, val] = item.split('=');
    key = decodeURIComponent(key);

    // 无赋值 key-enabled -> 值为 true
    if (val === undefined) {
      res[key] = true;
      return;
    }
    val = decodeURIComponent(val);
    // 可以转数字就转为 number
    const num = Number(val);
    if (!isNaN(num)) val = num;

    // 重复 key 存入数组
    if (res.hasOwnProperty(key)) {
      if (Array.isArray(res[key])) {
        res[key].push(val);
      } else {
        res[key] = [res[key], val];
      }
    } else {
      res[key] = val;
    }
  });
  return res;
}

// 测试

let url ="http://xxx.geely.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"
console.log(parseParam(url))


function reverse(arr) {
  return arr[0].map((_, index) => arr.map(row => row[index]))
}

// 测试
const arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(reverse(arr)); // [[1,4,7],[2,5,8],[3,6,9]]
