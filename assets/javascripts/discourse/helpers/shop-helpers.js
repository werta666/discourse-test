import { helper } from "@ember/component/helper";

// 生成数字范围的辅助函数，用于星级评分
export const range = helper(function([start, end]) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
});

// 数学运算辅助函数
export const add = helper(function([a, b]) {
  return a + b;
});

export const sub = helper(function([a, b]) {
  return a - b;
});

export const lte = helper(function([a, b]) {
  return a <= b;
});

export const eq = helper(function([a, b]) {
  return a === b;
});

export const mut = helper(function([value]) {
  return value;
});
