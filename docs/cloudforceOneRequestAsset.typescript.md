# `cloudforceOneRequestAsset` Submodule <a name="`cloudforceOneRequestAsset` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequestAsset <a name="CloudforceOneRequestAsset" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

new cloudforceOneRequestAsset.CloudforceOneRequestAsset(scope: Construct, id: string, config: CloudforceOneRequestAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig">CloudforceOneRequestAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig">CloudforceOneRequestAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetAssetIdentifer">resetAssetIdentifer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetSource">resetSource</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAssetIdentifer` <a name="resetAssetIdentifer" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetAssetIdentifer"></a>

```typescript
public resetAssetIdentifer(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.resetSource"></a>

```typescript
public resetSource(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudforceOneRequestAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudforceOneRequestAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequestAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdentifierInput">accountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.assetIdentiferInput">assetIdentiferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.pageInput">pageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdentifierInput">requestIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.assetIdentifer">assetIdentifer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.page">page</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdentifier">requestIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accountIdentifierInput`<sup>Optional</sup> <a name="accountIdentifierInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdentifierInput"></a>

```typescript
public readonly accountIdentifierInput: string;
```

- *Type:* string

---

##### `assetIdentiferInput`<sup>Optional</sup> <a name="assetIdentiferInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.assetIdentiferInput"></a>

```typescript
public readonly assetIdentiferInput: string;
```

- *Type:* string

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.pageInput"></a>

```typescript
public readonly pageInput: number;
```

- *Type:* number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `requestIdentifierInput`<sup>Optional</sup> <a name="requestIdentifierInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdentifierInput"></a>

```typescript
public readonly requestIdentifierInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

---

##### `assetIdentifer`<sup>Required</sup> <a name="assetIdentifer" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.assetIdentifer"></a>

```typescript
public readonly assetIdentifer: string;
```

- *Type:* string

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

##### `requestIdentifier`<sup>Required</sup> <a name="requestIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.requestIdentifier"></a>

```typescript
public readonly requestIdentifier: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestAssetConfig <a name="CloudforceOneRequestAssetConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.Initializer"></a>

```typescript
import { cloudforceOneRequestAsset } from '@cdktf/provider-cloudflare'

const cloudforceOneRequestAssetConfig: cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.accountIdentifier">accountIdentifier</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.page">page</a></code> | <code>number</code> | Page number of results. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.perPage">perPage</a></code> | <code>number</code> | Number of results per page. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.requestIdentifier">requestIdentifier</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.assetIdentifer">assetIdentifer</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.source">source</a></code> | <code>string</code> | Asset file to upload. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.accountIdentifier"></a>

```typescript
public readonly accountIdentifier: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#account_identifier CloudforceOneRequestAsset#account_identifier}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.page"></a>

```typescript
public readonly page: number;
```

- *Type:* number

Page number of results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#page CloudforceOneRequestAsset#page}

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#per_page CloudforceOneRequestAsset#per_page}

---

##### `requestIdentifier`<sup>Required</sup> <a name="requestIdentifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.requestIdentifier"></a>

```typescript
public readonly requestIdentifier: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#request_identifier CloudforceOneRequestAsset#request_identifier}

---

##### `assetIdentifer`<sup>Optional</sup> <a name="assetIdentifer" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.assetIdentifer"></a>

```typescript
public readonly assetIdentifer: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#asset_identifer CloudforceOneRequestAsset#asset_identifer}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-cloudflare.cloudforceOneRequestAsset.CloudforceOneRequestAssetConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Asset file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/cloudforce_one_request_asset#source CloudforceOneRequestAsset#source}

---



