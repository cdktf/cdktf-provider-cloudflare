# `zeroTrustGatewayCertificate` Submodule <a name="`zeroTrustGatewayCertificate` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayCertificate <a name="ZeroTrustGatewayCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_gateway_certificate cloudflare_zero_trust_gateway_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate(scope: Construct, id: string, config: ZeroTrustGatewayCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig">ZeroTrustGatewayCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig">ZeroTrustGatewayCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.resetValidityPeriodDays">resetValidityPeriodDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetValidityPeriodDays` <a name="resetValidityPeriodDays" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.resetValidityPeriodDays"></a>

```typescript
public resetValidityPeriodDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isConstruct"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformElement"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformResource"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustGatewayCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustGatewayCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustGatewayCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_gateway_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.bindingStatus">bindingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.inUse">inUse</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.issuerOrg">issuerOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.issuerRaw">issuerRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.validityPeriodDaysInput">validityPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.validityPeriodDays">validityPeriodDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bindingStatus`<sup>Required</sup> <a name="bindingStatus" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.bindingStatus"></a>

```typescript
public readonly bindingStatus: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inUse`<sup>Required</sup> <a name="inUse" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.inUse"></a>

```typescript
public readonly inUse: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `issuerOrg`<sup>Required</sup> <a name="issuerOrg" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.issuerOrg"></a>

```typescript
public readonly issuerOrg: string;
```

- *Type:* string

---

##### `issuerRaw`<sup>Required</sup> <a name="issuerRaw" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.issuerRaw"></a>

```typescript
public readonly issuerRaw: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `validityPeriodDaysInput`<sup>Optional</sup> <a name="validityPeriodDaysInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.validityPeriodDaysInput"></a>

```typescript
public readonly validityPeriodDaysInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `validityPeriodDays`<sup>Required</sup> <a name="validityPeriodDays" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.validityPeriodDays"></a>

```typescript
public readonly validityPeriodDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayCertificateConfig <a name="ZeroTrustGatewayCertificateConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.Initializer"></a>

```typescript
import { zeroTrustGatewayCertificate } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayCertificateConfig: zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_gateway_certificate#account_id ZeroTrustGatewayCertificate#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.validityPeriodDays">validityPeriodDays</a></code> | <code>number</code> | Number of days the generated certificate will be valid, minimum 1 day and maximum 30 years. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_gateway_certificate#account_id ZeroTrustGatewayCertificate#account_id}.

---

##### `validityPeriodDays`<sup>Optional</sup> <a name="validityPeriodDays" id="@cdktf/provider-cloudflare.zeroTrustGatewayCertificate.ZeroTrustGatewayCertificateConfig.property.validityPeriodDays"></a>

```typescript
public readonly validityPeriodDays: number;
```

- *Type:* number

Number of days the generated certificate will be valid, minimum 1 day and maximum 30 years.

Defaults to 5 years. In terraform, validity_period_days can only be used while creating a certificate, and this CAN NOT be used to extend the validity of an already generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_gateway_certificate#validity_period_days ZeroTrustGatewayCertificate#validity_period_days}

---



