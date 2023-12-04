# `customSsl` Submodule <a name="`customSsl` Submodule" id="@cdktf/provider-cloudflare.customSsl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomSsl <a name="CustomSsl" id="@cdktf/provider-cloudflare.customSsl.CustomSsl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl cloudflare_custom_ssl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSsl(scope: Construct, id: string, config: CustomSslConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig">CustomSslConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig">CustomSslConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions">putCustomSslOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority">putCustomSslPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslOptions">resetCustomSslOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslPriority">resetCustomSslPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomSslOptions` <a name="putCustomSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions"></a>

```typescript
public putCustomSslOptions(value: CustomSslCustomSslOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

---

##### `putCustomSslPriority` <a name="putCustomSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority"></a>

```typescript
public putCustomSslPriority(value: IResolvable | CustomSslCustomSslPriority[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putCustomSslPriority.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]

---

##### `resetCustomSslOptions` <a name="resetCustomSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslOptions"></a>

```typescript
public resetCustomSslOptions(): void
```

##### `resetCustomSslPriority` <a name="resetCustomSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetCustomSslPriority"></a>

```typescript
public resetCustomSslPriority(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

customSsl.CustomSsl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

customSsl.CustomSsl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

customSsl.CustomSsl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

customSsl.CustomSsl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomSsl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomSsl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomSsl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomSsl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptions">customSslOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference">CustomSslCustomSslOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriority">customSslPriority</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList">CustomSslCustomSslPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptionsInput">customSslOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriorityInput">customSslPriorityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customSslOptions`<sup>Required</sup> <a name="customSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptions"></a>

```typescript
public readonly customSslOptions: CustomSslCustomSslOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference">CustomSslCustomSslOptionsOutputReference</a>

---

##### `customSslPriority`<sup>Required</sup> <a name="customSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriority"></a>

```typescript
public readonly customSslPriority: CustomSslCustomSslPriorityList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList">CustomSslCustomSslPriorityList</a>

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `customSslOptionsInput`<sup>Optional</sup> <a name="customSslOptionsInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslOptionsInput"></a>

```typescript
public readonly customSslOptionsInput: CustomSslCustomSslOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

---

##### `customSslPriorityInput`<sup>Optional</sup> <a name="customSslPriorityInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.customSslPriorityInput"></a>

```typescript
public readonly customSslPriorityInput: IResolvable | CustomSslCustomSslPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomSslConfig <a name="CustomSslConfig" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslConfig: customSsl.CustomSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslOptions">customSslOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | custom_ssl_options block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslPriority">customSslPriority</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]</code> | custom_ssl_priority block. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#id CustomSsl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}

---

##### `customSslOptions`<sup>Optional</sup> <a name="customSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslOptions"></a>

```typescript
public readonly customSslOptions: CustomSslCustomSslOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

custom_ssl_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#custom_ssl_options CustomSsl#custom_ssl_options}

---

##### `customSslPriority`<sup>Optional</sup> <a name="customSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.customSslPriority"></a>

```typescript
public readonly customSslPriority: IResolvable | CustomSslCustomSslPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]

custom_ssl_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#custom_ssl_priority CustomSsl#custom_ssl_priority}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#id CustomSsl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CustomSslCustomSslOptions <a name="CustomSslCustomSslOptions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslCustomSslOptions: customSsl.CustomSslCustomSslOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | Method of building intermediate certificate chain. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.certificate">certificate</a></code> | <code>string</code> | Certificate certificate and the intermediate(s). |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.geoRestrictions">geoRestrictions</a></code> | <code>string</code> | Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.privateKey">privateKey</a></code> | <code>string</code> | Certificate's private key. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.type">type</a></code> | <code>string</code> | Whether to enable support for legacy clients which do not include SNI in the TLS handshake. |

---

##### `bundleMethod`<sup>Optional</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

Method of building intermediate certificate chain.

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it. Available values: `ubiquitous`, `optimal`, `force`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Certificate certificate and the intermediate(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}

---

##### `geoRestrictions`<sup>Optional</sup> <a name="geoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: string;
```

- *Type:* string

Specifies the region where your private key can be held locally. Available values: `us`, `eu`, `highest_security`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Whether to enable support for legacy clients which do not include SNI in the TLS handshake.

Available values: `legacy_custom`, `sni_custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#type CustomSsl#type}

---

### CustomSslCustomSslPriority <a name="CustomSslCustomSslPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslCustomSslPriority: customSsl.CustomSslCustomSslPriority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#id CustomSsl#id}. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#priority CustomSsl#priority}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#id CustomSsl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.20.0/docs/resources/custom_ssl#priority CustomSsl#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomSslCustomSslOptionsOutputReference <a name="CustomSslCustomSslOptionsOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslCustomSslOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetBundleMethod">resetBundleMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetGeoRestrictions">resetGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleMethod` <a name="resetBundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetBundleMethod"></a>

```typescript
public resetBundleMethod(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetGeoRestrictions` <a name="resetGeoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetGeoRestrictions"></a>

```typescript
public resetGeoRestrictions(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethodInput">bundleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictionsInput">geoRestrictionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleMethodInput`<sup>Optional</sup> <a name="bundleMethodInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethodInput"></a>

```typescript
public readonly bundleMethodInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `geoRestrictionsInput`<sup>Optional</sup> <a name="geoRestrictionsInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictionsInput"></a>

```typescript
public readonly geoRestrictionsInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomSslCustomSslOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslOptions">CustomSslCustomSslOptions</a>

---


### CustomSslCustomSslPriorityList <a name="CustomSslCustomSslPriorityList" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslCustomSslPriorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get"></a>

```typescript
public get(index: number): CustomSslCustomSslPriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomSslCustomSslPriority[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>[]

---


### CustomSslCustomSslPriorityOutputReference <a name="CustomSslCustomSslPriorityOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslCustomSslPriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomSslCustomSslPriority;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslCustomSslPriority">CustomSslCustomSslPriority</a>

---



