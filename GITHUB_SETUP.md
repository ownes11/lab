# Инструкция по настройке GitHub для push

## Проблема
Ошибка "Permission denied (publickey)" означает, что SSH ключ не настроен. Используем HTTPS с Personal Access Token.

## Решение: Personal Access Token

### Шаг 1: Создайте Personal Access Token

1. Перейдите на страницу создания токена:
   https://github.com/settings/tokens/new

2. Заполните форму:
   - **Note**: `Lab 03 Push Token` (любое название)
   - **Expiration**: выберите срок действия (например, 90 дней)
   - **Select scopes**: отметьте `repo` (полный доступ к репозиториям)

3. Нажмите **"Generate token"** внизу страницы

4. **ВАЖНО**: Скопируйте токен сразу! Он показывается только один раз.
   Токен будет выглядеть примерно так: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Шаг 2: Используйте токен для push

Выполните команду:
```bash
cd Lab_03
git push -u origin main
```

Когда Git попросит:
- **Username**: введите `ownes11`
- **Password**: вставьте ваш Personal Access Token (НЕ ваш обычный пароль!)

### Альтернатива: Настройка SSH ключа

Если хотите использовать SSH:

1. Проверьте, есть ли у вас SSH ключ:
   ```bash
   ls ~/.ssh/id_ed25519.pub
   ```

2. Если ключа нет, создайте его:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   (Нажимайте Enter для всех вопросов)

3. Скопируйте публичный ключ:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

4. Добавьте ключ в GitHub:
   - Перейдите: https://github.com/settings/keys
   - Нажмите "New SSH key"
   - Вставьте содержимое файла `~/.ssh/id_ed25519.pub`
   - Сохраните

5. Измените remote на SSH:
   ```bash
   git remote set-url origin git@github.com:ownes11/lab.git
   ```

6. Попробуйте push снова:
   ```bash
   git push -u origin main
   ```

## Текущий статус

✅ Репозиторий инициализирован
✅ Remote настроен на HTTPS
✅ Создано 3 коммита с conventional commits:
   - feat: add Lab 3.1 StepCounter component
   - feat: add Lab 3.2 UserProfile component  
   - docs: add README files

Готово к push после настройки токена!

