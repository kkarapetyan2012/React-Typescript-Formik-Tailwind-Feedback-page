
type CssClass = { [propName: string]: string | number | boolean | undefined | null };
export const createCSSClass = (staticClass: (string | undefined)[], dynamicClass?: CssClass): string => {
  let result = staticClass.join(' ').trimEnd();
  if (!dynamicClass) return result;
  Object.entries(dynamicClass).forEach(([key, value]) => {
    if (value) result += ` ${key}`;
  });
  return result.trim();
};