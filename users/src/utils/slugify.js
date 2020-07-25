module.exports.slugify = function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
  
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // séparation par -
      .replace(p, c => b.charAt(a.indexOf(c))) // remplacer les caractzers spéciaux
      .replace(/&/g, '-et-') // Replace & with 'et'
      .replace(/[^\w\-]+/g, '') // retirer tout ce qui n'est pas des lettres
      .replace(/\-\-+/g, '-') // remplacer des - multiple par un seul
      .replace(/^-+/, '') // Trim - début 
      .replace(/-+$/, '') // Trim - fin
  }