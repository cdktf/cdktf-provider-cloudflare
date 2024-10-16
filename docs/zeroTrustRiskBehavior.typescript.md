# `zeroTrustRiskBehavior` Submodule <a name="`zeroTrustRiskBehavior` Submodule" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskBehavior <a name="ZeroTrustRiskBehavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior cloudflare_zero_trust_risk_behavior}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

new zeroTrustRiskBehavior.ZeroTrustRiskBehavior(scope: Construct, id: string, config: ZeroTrustRiskBehaviorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig">ZeroTrustRiskBehaviorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig">ZeroTrustRiskBehaviorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.putBehavior">putBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBehavior` <a name="putBehavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.putBehavior"></a>

```typescript
public putBehavior(value: IResolvable | ZeroTrustRiskBehaviorBehavior[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.putBehavior.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.resetBehavior"></a>

```typescript
public resetBehavior(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isConstruct"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformElement"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformResource"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustRiskBehavior resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustRiskBehavior to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustRiskBehavior that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskBehavior to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.behavior">behavior</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList">ZeroTrustRiskBehaviorBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.behaviorInput">behaviorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.behavior"></a>

```typescript
public readonly behavior: ZeroTrustRiskBehaviorBehaviorList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList">ZeroTrustRiskBehaviorBehaviorList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: IResolvable | ZeroTrustRiskBehaviorBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehavior.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskBehaviorBehavior <a name="ZeroTrustRiskBehaviorBehavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.Initializer"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

const zeroTrustRiskBehaviorBehavior: zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this risk behavior type is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.name">name</a></code> | <code>string</code> | Name of this risk behavior type. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.riskLevel">riskLevel</a></code> | <code>string</code> | Risk level. Available values: `low`, `medium`, `high`. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this risk behavior type is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#enabled ZeroTrustRiskBehavior#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of this risk behavior type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#name ZeroTrustRiskBehavior#name}

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

Risk level. Available values: `low`, `medium`, `high`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#risk_level ZeroTrustRiskBehavior#risk_level}

---

### ZeroTrustRiskBehaviorConfig <a name="ZeroTrustRiskBehaviorConfig" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.Initializer"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

const zeroTrustRiskBehaviorConfig: zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.behavior">behavior</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]</code> | behavior block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#account_id ZeroTrustRiskBehavior#account_id}

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorConfig.property.behavior"></a>

```typescript
public readonly behavior: IResolvable | ZeroTrustRiskBehaviorBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]

behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_risk_behavior#behavior ZeroTrustRiskBehavior#behavior}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustRiskBehaviorBehaviorList <a name="ZeroTrustRiskBehaviorBehaviorList" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

new zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.get"></a>

```typescript
public get(index: number): ZeroTrustRiskBehaviorBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustRiskBehaviorBehavior[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>[]

---


### ZeroTrustRiskBehaviorBehaviorOutputReference <a name="ZeroTrustRiskBehaviorBehaviorOutputReference" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer"></a>

```typescript
import { zeroTrustRiskBehavior } from '@cdktf/provider-cloudflare'

new zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.riskLevelInput">riskLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.riskLevel">riskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `riskLevelInput`<sup>Optional</sup> <a name="riskLevelInput" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.riskLevelInput"></a>

```typescript
public readonly riskLevelInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `riskLevel`<sup>Required</sup> <a name="riskLevel" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.riskLevel"></a>

```typescript
public readonly riskLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustRiskBehaviorBehavior;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustRiskBehavior.ZeroTrustRiskBehaviorBehavior">ZeroTrustRiskBehaviorBehavior</a>

---



