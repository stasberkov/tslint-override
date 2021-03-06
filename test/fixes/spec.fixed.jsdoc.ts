abstract class First {

}

class Foo extends First {
    /* non doc comment */
    /** doc comment **/
    public bar(): void { }

    public overrideMe(arg0: string): number { return 0; }
    public overrideMe2(arg0: string): number { return 0; }
    public overrideMe3(arg0: string): number { return 0; }

    public notToOverride(): void { } 
}

export class Baz extends Foo {
    /**
     * Multiline doc comment
     @override
     */
    /**
      Second multi doc comment
      **/
    public bar(): void { }

    /**
     * 
     */
    public baz(): void { }

    /**
     * This function is already documented.
     * @param arg0 - Some unused argument
     * @return A [random number](https://xkcd.com/221/)
     * 
     * @since 0.2.2
     * @override
     */
    public overrideMe(arg0: string): number {
        return 1;
    }

    /**
      This function is already documented with a bad format.
      @param arg0 - Some unused argument
      @return A [random number](https://xkcd.com/221/)
      
      @since 0.2.2
      @override
    */
    public overrideMe2(arg0: string): number {
        return 1;
    }

    /** This function is already documented on one line 
    @override
*/
    public overrideMe3(arg0: string): number {
        return 1;
    }

    /** @override */ public notToOverride(): void { }

    @override public bar(): void { }
}
