export class NavigateUtil {

  static open(name: string, params: { [key: string]: string }): void {
    const origin: string = window.location.origin;
    const hash: string = window.location.hash;
    const hashs: string[] = hash.split('?');
    const param = [];
    const keys = Object.keys(params);
    keys.forEach(item => {
      param.push(`${item}=${params[item]}`);
    });
    const p = keys.length === 0 ? '' : '?' + param.join('&');
    window.open(`${origin}/${hashs[0]}/${name}${p}`);
  }

}
