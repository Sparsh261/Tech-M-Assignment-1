import java.util.Scanner;

class Employee {

	private String name;
    private int id;
    private double basicSalary;
    private double bonus;
    private double taxRate;

    public Employee(String name, int id, double basicSalary, double bonus, double taxRate) {
        this.name = name;
        this.id = id;
        this.basicSalary = basicSalary;
        this.bonus = bonus;
        this.taxRate = taxRate;
    }

    public double calcSalary() {
        double grossSalary = basicSalary + bonus;
        double taxAmount = grossSalary * (taxRate / 100);
        return grossSalary - taxAmount;
    }

    public void details() {
    	System.out.println();
        System.out.println(" Employee Details ");
        System.out.println("Employee Name: " + name);
        System.out.println("Basic Salary: Rs" + basicSalary);
        System.out.println("Bonus: Rs" + bonus);
        System.out.println("Net Salary after tax: Rs" + calcSalary());
    }

    public String toString(){
        return "Emp: " + name;
    } 
}
public class SalaryCalculator {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Employee Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Employee ID: ");
        int id = scanner.nextInt();

        System.out.print("Enter Basic Salary: ");
        double basicSalary = scanner.nextDouble();

        System.out.print("Enter Bonus Amount: ");
        double bonus = scanner.nextDouble();

        System.out.print("Enter Tax Rate (%): ");
        double taxRate = scanner.nextDouble();

        Employee emp = new Employee(name, id, basicSalary, bonus, taxRate);

        emp.details();

        scanner.close();
	}

}
