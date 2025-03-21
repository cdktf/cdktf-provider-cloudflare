# `streamWatermark` Submodule <a name="`streamWatermark` Submodule" id="@cdktf/provider-cloudflare.streamWatermark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamWatermarkA <a name="StreamWatermarkA" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark cloudflare_stream_watermark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

new streamWatermark.StreamWatermarkA(scope: Construct, id: string, config: StreamWatermarkAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig">StreamWatermarkAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig">StreamWatermarkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity">resetOpacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding">resetPadding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale">resetScale</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOpacity` <a name="resetOpacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity"></a>

```typescript
public resetOpacity(): void
```

##### `resetPadding` <a name="resetPadding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding"></a>

```typescript
public resetPadding(): void
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetScale` <a name="resetScale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale"></a>

```typescript
public resetScale(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

streamWatermark.StreamWatermarkA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

streamWatermark.StreamWatermarkA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

streamWatermark.StreamWatermarkA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

streamWatermark.StreamWatermarkA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamWatermarkA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamWatermarkA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamWatermarkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamWatermarkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom">downloadedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput">opacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput">paddingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput">positionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput">scaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity">opacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding">padding</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale">scale</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `downloadedFrom`<sup>Required</sup> <a name="downloadedFrom" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom"></a>

```typescript
public readonly downloadedFrom: string;
```

- *Type:* string

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opacityInput`<sup>Optional</sup> <a name="opacityInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput"></a>

```typescript
public readonly opacityInput: number;
```

- *Type:* number

---

##### `paddingInput`<sup>Optional</sup> <a name="paddingInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput"></a>

```typescript
public readonly paddingInput: number;
```

- *Type:* number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput"></a>

```typescript
public readonly positionInput: string;
```

- *Type:* string

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput"></a>

```typescript
public readonly scaleInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opacity`<sup>Required</sup> <a name="opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity"></a>

```typescript
public readonly opacity: number;
```

- *Type:* number

---

##### `padding`<sup>Required</sup> <a name="padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding"></a>

```typescript
public readonly padding: number;
```

- *Type:* number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamWatermarkAConfig <a name="StreamWatermarkAConfig" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.Initializer"></a>

```typescript
import { streamWatermark } from '@cdktf/provider-cloudflare'

const streamWatermarkAConfig: streamWatermark.StreamWatermarkAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.file">file</a></code> | <code>string</code> | The image file to upload. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier">identifier</a></code> | <code>string</code> | The unique identifier for a watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name">name</a></code> | <code>string</code> | A short description of the watermark profile. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity">opacity</a></code> | <code>number</code> | The translucency of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding">padding</a></code> | <code>number</code> | The whitespace between the adjacent edges (determined by position) of the video and the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position">position</a></code> | <code>string</code> | The location of the image. |
| <code><a href="#@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale">scale</a></code> | <code>number</code> | The size of the image relative to the overall size of the video. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

The image file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#file StreamWatermarkA#file}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The unique identifier for a watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A short description of the watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#name StreamWatermarkA#name}

---

##### `opacity`<sup>Optional</sup> <a name="opacity" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity"></a>

```typescript
public readonly opacity: number;
```

- *Type:* number

The translucency of the image.

A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}

---

##### `padding`<sup>Optional</sup> <a name="padding" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding"></a>

```typescript
public readonly padding: number;
```

- *Type:* number

The whitespace between the adjacent edges (determined by position) of the video and the image.

`0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#padding StreamWatermarkA#padding}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

The location of the image.

Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#position StreamWatermarkA#position}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktf/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale"></a>

```typescript
public readonly scale: number;
```

- *Type:* number

The size of the image relative to the overall size of the video.

This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/stream_watermark#scale StreamWatermarkA#scale}

---



