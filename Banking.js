 function showDebitForms() {
            document.getElementById('options').classList.add('hidden');
            document.getElementById('bankForm').classList.remove('hidden');
        }

        function showCreditForms() {
            document.getElementById('options').classList.add('hidden');
            document.getElementById('bankForm-credit').classList.remove('hidden');
        }

        function showDebitCardForm() {
            document.getElementById('bankForm').classList.add('hidden');
            document.getElementById('cardForm').classList.remove('hidden');
        }

        function showCreditCardForm() {
            document.getElementById('bankForm-credit').classList.add('hidden');
            document.getElementById('cardForm-credit').classList.remove('hidden');
        }

        function showDebitBankForm() {
            document.getElementById('cardForm').classList.add('hidden');
            document.getElementById('bankForm').classList.remove('hidden');
        }

        function showCreditBankForm() {
            document.getElementById('cardForm-credit').classList.add('hidden');
            document.getElementById('bankForm-credit').classList.remove('hidden');
        }