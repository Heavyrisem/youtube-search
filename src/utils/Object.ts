/* eslint-disable no-param-reassign */
export const forEachObject = (obj: object, callback: (key: string, value: any) => any) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      (obj as any)[key] = forEachObject(value, callback);
    } else {
      (obj as any)[key] = callback(key, value);
    }
  });
};
