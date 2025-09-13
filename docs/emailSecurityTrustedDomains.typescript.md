# `emailSecurityTrustedDomains` Submodule <a name="`emailSecurityTrustedDomains` Submodule" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityTrustedDomains <a name="EmailSecurityTrustedDomains" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

new emailSecurityTrustedDomains.EmailSecurityTrustedDomains(scope: Construct, id: string, config: EmailSecurityTrustedDomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments">resetComments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent">resetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex">resetIsRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity">resetIsSimilarity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBody` <a name="putBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody"></a>

```typescript
public putBody(value: IResolvable | EmailSecurityTrustedDomainsBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.putBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetComments` <a name="resetComments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments"></a>

```typescript
public resetComments(): void
```

##### `resetIsRecent` <a name="resetIsRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent"></a>

```typescript
public resetIsRecent(): void
```

##### `resetIsRegex` <a name="resetIsRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex"></a>

```typescript
public resetIsRegex(): void
```

##### `resetIsSimilarity` <a name="resetIsSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity"></a>

```typescript
public resetIsSimilarity(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetPattern"></a>

```typescript
public resetPattern(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityTrustedDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityTrustedDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body">body</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput">bodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput">commentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput">isRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput">isRegexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput">isSimilarityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex">isRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.body"></a>

```typescript
public readonly body: EmailSecurityTrustedDomainsBodyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList">EmailSecurityTrustedDomainsBodyList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | EmailSecurityTrustedDomainsBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput"></a>

```typescript
public readonly commentsInput: string;
```

- *Type:* string

---

##### `isRecentInput`<sup>Optional</sup> <a name="isRecentInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput"></a>

```typescript
public readonly isRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRegexInput`<sup>Optional</sup> <a name="isRegexInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput"></a>

```typescript
public readonly isRegexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarityInput`<sup>Optional</sup> <a name="isSimilarityInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput"></a>

```typescript
public readonly isSimilarityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityTrustedDomainsBody <a name="EmailSecurityTrustedDomainsBody" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.Initializer"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

const emailSecurityTrustedDomainsBody: emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex">isRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments">comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

### EmailSecurityTrustedDomainsConfig <a name="EmailSecurityTrustedDomainsConfig" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.Initializer"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

const emailSecurityTrustedDomainsConfig: emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId">accountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body">body</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments">comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex">isRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.body"></a>

```typescript
public readonly body: IResolvable | EmailSecurityTrustedDomainsBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}.

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

##### `isRecent`<sup>Optional</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `isRegex`<sup>Optional</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `isSimilarity`<sup>Optional</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from
triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityTrustedDomainsBodyList <a name="EmailSecurityTrustedDomainsBodyList" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

new emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get"></a>

```typescript
public get(index: number): EmailSecurityTrustedDomainsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailSecurityTrustedDomainsBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>[]

---


### EmailSecurityTrustedDomainsBodyOutputReference <a name="EmailSecurityTrustedDomainsBodyOutputReference" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer"></a>

```typescript
import { emailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

new emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments">resetComments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComments` <a name="resetComments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.resetComments"></a>

```typescript
public resetComments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput">commentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput">isRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput">isRegexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput">isSimilarityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex">isRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.commentsInput"></a>

```typescript
public readonly commentsInput: string;
```

- *Type:* string

---

##### `isRecentInput`<sup>Optional</sup> <a name="isRecentInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecentInput"></a>

```typescript
public readonly isRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRegexInput`<sup>Optional</sup> <a name="isRegexInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegexInput"></a>

```typescript
public readonly isRegexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarityInput`<sup>Optional</sup> <a name="isSimilarityInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarityInput"></a>

```typescript
public readonly isSimilarityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isRegex"></a>

```typescript
public readonly isRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmailSecurityTrustedDomainsBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsBody">EmailSecurityTrustedDomainsBody</a>

---



