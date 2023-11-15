function db<T>(table: string) {
    if (window) {
        const setTable = (value: any) => window.localStorage.setItem(table, value);
        const getTable = () => window.localStorage.getItem(table);

        if (!getTable()) {
            setTable(JSON.stringify([]));
        }

        const allLocal = () => JSON.parse(getTable()!);
        return {
            getAllData() {
                return allLocal() as T[];
            },
            getById(columnId: string) {
                const item = (this.getAllData() as any[]).find(
                    (i: { id: string }) => i.id === columnId
                )!;
                return item as T;
            },

            removeById(columnId: string) {
                const ids = (this.getAllData() as any[]).findIndex(
                    (i: { id: string }) => i.id === columnId
                )!;

                if (ids > -1) {
                    setTable(
                        JSON.stringify([...(allLocal() as any []).filter((i) => i.id !== columnId),
                        ])
                    );
                    return true;
                }
                return false;
            },

            create<T>(params: T) {
                const stringified = JSON.stringify([...allLocal(), params]);
                setTable(stringified);
            },

            updateByField(columnId: string, field: any, newValue: any) {
                const item = (this.getAllData() as any[]).find(
                    (i: { id: string }) => i.id === columnId) as T;
                let newItem = {...item, [field]: newValue} as T;

                if (newValue === "toggle") {
                    newItem = {...item, [field]: !item[field as keyof T]};
                }

                const stringified = JSON.stringify([
                    ...(allLocal() as { id: string }[]).map((i) => {
                        const isChanged = i.id === columnId;
                        return {
                            ...i,
                            ...(isChanged ? newItem : {}),
                        };
                    })
                ]);
                setTable(stringified);
                return newItem;
            }
        }
    }

    return {
        getAllData() {
            return [] as T[];
        },
        getById(columnId: string) {
            return {} as T;
        },
        create<T>(params: T) {
        },
        removeById(columnId: string) {
            return false;
        },
        updateByField(columnId: string, field: any, newValue: any) {
            return {} as T;
        },
    };
}

export default db;