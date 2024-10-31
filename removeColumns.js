import sequelize from "./db/db.js"; // Подключение к вашей базе данных

async function removeColumns() {
    try {
        // Удаление столбца id_order_products_orderId, если он существует
        await sequelize.query('ALTER TABLE "OrderProducts" DROP COLUMN IF EXISTS "id_order_products_orderId";');

        // Удаление столбца id_OrderProducts_orderId, если он существует
        await sequelize.query('ALTER TABLE "OrderProducts" DROP COLUMN IF EXISTS "id_OrderProducts_orderId";');

        console.log("Столбцы успешно удалены");
    } catch (error) {
        console.error("Ошибка при удалении столбцов:", error);
    }
}

// Вызов функции для удаления столбцов
removeColumns();