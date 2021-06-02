
import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JPanel;


public class Imagem extends JFrame{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	ImageIcon cinema = new ImageIcon(getClass().getResource("java.png"));
	JLabel label = new JLabel(cinema);
	
    
    
    public class SalaCinema {
        
    }
        public static void main(String[] args) {
            new Imagem();
            //Sala cinema 
            
            // Assentos
            //
            //
            
            
            JFrame frame = new JFrame();
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(500, 500);
            frame.setLayout(new FlowLayout(FlowLayout.CENTER,10,10));
            
            
            JPanel panel = new JPanel();
            panel.setPreferredSize(new Dimension(250,250));
            panel.setBackground(Color.DARK_GRAY);
            panel.setLayout(new FlowLayout());
            
            JLabel cinema = new JLabel("Sala Cinema");
            
            cinema.setFont(new Font("Arial" ,Font.BOLD,20));
            cinema.setForeground(Color.RED);
            
            
            
            
            
            panel.add(new JButton("1"));
            panel.add(new JButton("2"));
            panel.add(new JButton("3"));
            panel.add(new JButton("4"));
            panel.add(new JButton("5"));
            panel.add(new JButton("6"));
            panel.add(new JButton("7"));
            panel.add(new JButton("8"));
            panel.add(new JButton("9"));
            panel.add(new JButton("10"));
            
            frame.add(panel);
            frame.setVisible(true);
            panel.add(cinema);
        }
}