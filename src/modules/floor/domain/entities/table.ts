

export interface TableProps { 
    id: number,
    number: number,
    status: TableStatus
}


 number       Int           @unique
  capacity     Int
  status       TableStatus   @default(AVAILABLE)
  createdAt    DateTime      @default(now())
  id           Int           @id @default(autoincrement())
  comandas     Comanda[]
  reservations Reservation[]