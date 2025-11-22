# `streamCaptionLanguage` Submodule <a name="`streamCaptionLanguage` Submodule" id="@cdktf/provider-cloudflare.streamCaptionLanguage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamCaptionLanguage <a name="StreamCaptionLanguage" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language cloudflare_stream_caption_language}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

new streamCaptionLanguage.StreamCaptionLanguage(scope: Construct, id: string, config: StreamCaptionLanguageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig">StreamCaptionLanguageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig">StreamCaptionLanguageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetFile">resetFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFile` <a name="resetFile" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.resetFile"></a>

```typescript
public resetFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

streamCaptionLanguage.StreamCaptionLanguage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamCaptionLanguage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamCaptionLanguage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamCaptionLanguage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamCaptionLanguage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.generated">generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.language">language</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.generated"></a>

```typescript
public readonly generated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamCaptionLanguageConfig <a name="StreamCaptionLanguageConfig" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.Initializer"></a>

```typescript
import { streamCaptionLanguage } from '@cdktf/provider-cloudflare'

const streamCaptionLanguageConfig: streamCaptionLanguage.StreamCaptionLanguageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.identifier">identifier</a></code> | <code>string</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.language">language</a></code> | <code>string</code> | The language tag in BCP 47 format. |
| <code><a href="#@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.file">file</a></code> | <code>string</code> | The WebVTT file containing the caption or subtitle content. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#account_id StreamCaptionLanguage#account_id}

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#identifier StreamCaptionLanguage#identifier}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language tag in BCP 47 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#language StreamCaptionLanguage#language}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-cloudflare.streamCaptionLanguage.StreamCaptionLanguageConfig.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

The WebVTT file containing the caption or subtitle content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/stream_caption_language#file StreamCaptionLanguage#file}

---



