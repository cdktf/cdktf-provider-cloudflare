# `customSsl` Submodule <a name="`customSsl` Submodule" id="@cdktf/provider-cloudflare.customSsl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomSsl <a name="CustomSsl" id="@cdktf/provider-cloudflare.customSsl.CustomSsl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl cloudflare_custom_ssl}.

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
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.putGeoRestrictions">putGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetBundleMethod">resetBundleMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetGeoRestrictions">resetGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.resetType">resetType</a></code> | *No description.* |

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

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `putGeoRestrictions` <a name="putGeoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putGeoRestrictions"></a>

```typescript
public putGeoRestrictions(value: CustomSslGeoRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a>

---

##### `resetBundleMethod` <a name="resetBundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetBundleMethod"></a>

```typescript
public resetBundleMethod(): void
```

##### `resetGeoRestrictions` <a name="resetGeoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetGeoRestrictions"></a>

```typescript
public resetGeoRestrictions(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.resetType"></a>

```typescript
public resetType(): void
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference">CustomSslGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.keylessServer">keylessServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference">CustomSslKeylessServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.bundleMethodInput">bundleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.geoRestrictionsInput">geoRestrictionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSsl.property.type">type</a></code> | <code>string</code> | *No description.* |
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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: CustomSslGeoRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference">CustomSslGeoRestrictionsOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keylessServer`<sup>Required</sup> <a name="keylessServer" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.keylessServer"></a>

```typescript
public readonly keylessServer: CustomSslKeylessServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference">CustomSslKeylessServerOutputReference</a>

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

##### `bundleMethodInput`<sup>Optional</sup> <a name="bundleMethodInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.bundleMethodInput"></a>

```typescript
public readonly bundleMethodInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `geoRestrictionsInput`<sup>Optional</sup> <a name="geoRestrictionsInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.geoRestrictionsInput"></a>

```typescript
public readonly geoRestrictionsInput: IResolvable | CustomSslGeoRestrictions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSsl.property.type"></a>

```typescript
public readonly type: string;
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
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.certificate">certificate</a></code> | <code>string</code> | The zone's SSL certificate or certificate and the intermediate(s). |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The zone's private key. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a></code> | Specify the region where your private key can be held locally for optimal TLS performance. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.policy">policy</a></code> | <code>string</code> | Specify the policy that determines the region where your private key will be held locally. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.type">type</a></code> | <code>string</code> | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The zone's SSL certificate or certificate and the intermediate(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#certificate CustomSsl#certificate}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The zone's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#private_key CustomSsl#private_key}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#zone_id CustomSsl#zone_id}

---

##### `bundleMethod`<sup>Optional</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#bundle_method CustomSsl#bundle_method}

---

##### `geoRestrictions`<sup>Optional</sup> <a name="geoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: CustomSslGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a>

Specify the region where your private key can be held locally for optimal TLS performance.

HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#geo_restrictions CustomSsl#geo_restrictions}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Specify the policy that determines the region where your private key will be held locally.

HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#policy CustomSsl#policy}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.customSsl.CustomSslConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.

Available values: "legacy_custom", "sni_custom".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#type CustomSsl#type}

---

### CustomSslGeoRestrictions <a name="CustomSslGeoRestrictions" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslGeoRestrictions: customSsl.CustomSslGeoRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions.property.label">label</a></code> | <code>string</code> | Available values: "us", "eu", "highest_security". |

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Available values: "us", "eu", "highest_security".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/custom_ssl#label CustomSsl#label}

---

### CustomSslKeylessServer <a name="CustomSslKeylessServer" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServer.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslKeylessServer: customSsl.CustomSslKeylessServer = { ... }
```


### CustomSslKeylessServerTunnel <a name="CustomSslKeylessServerTunnel" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnel.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

const customSslKeylessServerTunnel: customSsl.CustomSslKeylessServerTunnel = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CustomSslGeoRestrictionsOutputReference <a name="CustomSslGeoRestrictionsOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomSslGeoRestrictions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslGeoRestrictions">CustomSslGeoRestrictions</a>

---


### CustomSslKeylessServerOutputReference <a name="CustomSslKeylessServerOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslKeylessServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.tunnel">tunnel</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference">CustomSslKeylessServerTunnelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServer">CustomSslKeylessServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tunnel`<sup>Required</sup> <a name="tunnel" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.tunnel"></a>

```typescript
public readonly tunnel: CustomSslKeylessServerTunnelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference">CustomSslKeylessServerTunnelOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomSslKeylessServer;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServer">CustomSslKeylessServer</a>

---


### CustomSslKeylessServerTunnelOutputReference <a name="CustomSslKeylessServerTunnelOutputReference" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.Initializer"></a>

```typescript
import { customSsl } from '@cdktf/provider-cloudflare'

new customSsl.CustomSslKeylessServerTunnelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.vnetId">vnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnel">CustomSslKeylessServerTunnel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomSslKeylessServerTunnel;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customSsl.CustomSslKeylessServerTunnel">CustomSslKeylessServerTunnel</a>

---



