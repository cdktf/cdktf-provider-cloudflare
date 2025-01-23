# `zeroTrustKeyAccessKeyConfiguration` Submodule <a name="`zeroTrustKeyAccessKeyConfiguration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustKeyAccessKeyConfiguration <a name="ZeroTrustKeyAccessKeyConfiguration" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration cloudflare_zero_trust_key_access_key_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

new zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration(scope: Construct, id: string, config: ZeroTrustKeyAccessKeyConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig">ZeroTrustKeyAccessKeyConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig">ZeroTrustKeyAccessKeyConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetKeyRotationIntervalDays">resetKeyRotationIntervalDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyRotationIntervalDays` <a name="resetKeyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.resetKeyRotationIntervalDays"></a>

```typescript
public resetKeyRotationIntervalDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustKeyAccessKeyConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustKeyAccessKeyConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustKeyAccessKeyConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustKeyAccessKeyConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustKeyAccessKeyConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDaysInput">keyRotationIntervalDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDays">keyRotationIntervalDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyRotationIntervalDaysInput`<sup>Optional</sup> <a name="keyRotationIntervalDaysInput" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDaysInput"></a>

```typescript
public readonly keyRotationIntervalDaysInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyRotationIntervalDays`<sup>Required</sup> <a name="keyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.keyRotationIntervalDays"></a>

```typescript
public readonly keyRotationIntervalDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustKeyAccessKeyConfigurationConfig <a name="ZeroTrustKeyAccessKeyConfigurationConfig" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.Initializer"></a>

```typescript
import { zeroTrustKeyAccessKeyConfiguration } from '@cdktf/provider-cloudflare'

const zeroTrustKeyAccessKeyConfigurationConfig: zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration#id ZeroTrustKeyAccessKeyConfiguration#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.keyRotationIntervalDays">keyRotationIntervalDays</a></code> | <code>number</code> | Number of days to trigger a rotation of the keys. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration#account_id ZeroTrustKeyAccessKeyConfiguration#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration#id ZeroTrustKeyAccessKeyConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyRotationIntervalDays`<sup>Optional</sup> <a name="keyRotationIntervalDays" id="@cdktf/provider-cloudflare.zeroTrustKeyAccessKeyConfiguration.ZeroTrustKeyAccessKeyConfigurationConfig.property.keyRotationIntervalDays"></a>

```typescript
public readonly keyRotationIntervalDays: number;
```

- *Type:* number

Number of days to trigger a rotation of the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.51.0/docs/resources/zero_trust_key_access_key_configuration#key_rotation_interval_days ZeroTrustKeyAccessKeyConfiguration#key_rotation_interval_days}

---



