function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) {
      // если элемент найден

      console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (wrapper.allCount == 0) {
      func(...args);
      wrapper.count += 1;
    }
    wrapper.allCount += 1;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count += 1;
    }, delay);
  }
  return wrapper;
}
