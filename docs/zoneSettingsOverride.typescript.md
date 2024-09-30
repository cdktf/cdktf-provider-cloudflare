# `zoneSettingsOverride` Submodule <a name="`zoneSettingsOverride` Submodule" id="@cdktf/provider-cloudflare.zoneSettingsOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSettingsOverride <a name="ZoneSettingsOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override cloudflare_zone_settings_override}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverride(scope: Construct, id: string, config: ZoneSettingsOverrideConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig">ZoneSettingsOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings"></a>

```typescript
public putSettings(value: ZoneSettingsOverrideSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.resetSettings"></a>

```typescript
public resetSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneSettingsOverride resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

zoneSettingsOverride.ZoneSettingsOverride.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZoneSettingsOverride resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneSettingsOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneSettingsOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSettingsOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings">initialSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt">initialSettingsReadAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings">readonlySettings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus">zoneStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType">zoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `initialSettings`<sup>Required</sup> <a name="initialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettings"></a>

```typescript
public readonly initialSettings: ZoneSettingsOverrideInitialSettingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList">ZoneSettingsOverrideInitialSettingsList</a>

---

##### `initialSettingsReadAt`<sup>Required</sup> <a name="initialSettingsReadAt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.initialSettingsReadAt"></a>

```typescript
public readonly initialSettingsReadAt: string;
```

- *Type:* string

---

##### `readonlySettings`<sup>Required</sup> <a name="readonlySettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.readonlySettings"></a>

```typescript
public readonly readonlySettings: string[];
```

- *Type:* string[]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settings"></a>

```typescript
public readonly settings: ZoneSettingsOverrideSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference">ZoneSettingsOverrideSettingsOutputReference</a>

---

##### `zoneStatus`<sup>Required</sup> <a name="zoneStatus" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneStatus"></a>

```typescript
public readonly zoneStatus: string;
```

- *Type:* string

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneType"></a>

```typescript
public readonly zoneType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.settingsInput"></a>

```typescript
public readonly settingsInput: ZoneSettingsOverrideSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverride.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSettingsOverrideConfig <a name="ZoneSettingsOverrideConfig" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideConfig: zoneSettingsOverride.ZoneSettingsOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#zone_id ZoneSettingsOverride#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideConfig.property.settings"></a>

```typescript
public readonly settings: ZoneSettingsOverrideSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#settings ZoneSettingsOverride#settings}

---

### ZoneSettingsOverrideInitialSettings <a name="ZoneSettingsOverrideInitialSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideInitialSettings: zoneSettingsOverride.ZoneSettingsOverrideInitialSettings = { ... }
```


### ZoneSettingsOverrideInitialSettingsMinify <a name="ZoneSettingsOverrideInitialSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideInitialSettingsMinify: zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify = { ... }
```


### ZoneSettingsOverrideInitialSettingsMobileRedirect <a name="ZoneSettingsOverrideInitialSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideInitialSettingsMobileRedirect: zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect = { ... }
```


### ZoneSettingsOverrideInitialSettingsNel <a name="ZoneSettingsOverrideInitialSettingsNel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNel.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideInitialSettingsNel: zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNel = { ... }
```


### ZoneSettingsOverrideInitialSettingsSecurityHeader <a name="ZoneSettingsOverrideInitialSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideInitialSettingsSecurityHeader: zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader = { ... }
```


### ZoneSettingsOverrideSettings <a name="ZoneSettingsOverrideSettings" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideSettings: zoneSettingsOverride.ZoneSettingsOverrideSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline">alwaysOnline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps">alwaysUseHttps</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst">binaryAst</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli">brotli</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl">browserCacheTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck">browserCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel">cacheLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl">challengeTtl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers">ciphers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening">cnameFlattening</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode">developmentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints">earlyHints</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation">emailObfuscation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare">filterLogsToCloudflare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.fonts">fonts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#fonts ZoneSettingsOverride#fonts}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization">h2Prioritization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection">hotlinkProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2">http2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3">http3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing">imageResizing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation">ipGeolocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6">ipv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare">logToCloudflare</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload">maxUpload</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify">minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | minify block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage">mirage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect">mobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | mobile_redirect block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.nel">nel</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a></code> | nel block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion">opportunisticOnion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange">orangeToOrange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru">originErrorPagePassThru</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion">originMaxHttpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish">polish</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload">prefetchPreload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass">privacyPass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout">proxyReadTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4">pseudoIpv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.replaceInsecureJs">replaceInsecureJs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#replace_insecure_js ZoneSettingsOverride#replace_insecure_js}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering">responseBuffering</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader">rocketLoader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader">securityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | security_header block. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel">securityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude">serverSideExclude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache">sortQueryStringForCache</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.speedBrain">speedBrain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#speed_brain ZoneSettingsOverride#speed_brain}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl">ssl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only">tls12Only</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13">tls13</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth">tlsClientAuth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader">trueClientIpHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl">universalSsl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp">visitorIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf">waf</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp">webp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets">websockets</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt">zeroRtt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}. |

---

##### `alwaysOnline`<sup>Optional</sup> <a name="alwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysOnline"></a>

```typescript
public readonly alwaysOnline: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}.

---

##### `alwaysUseHttps`<sup>Optional</sup> <a name="alwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.alwaysUseHttps"></a>

```typescript
public readonly alwaysUseHttps: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}.

---

##### `automaticHttpsRewrites`<sup>Optional</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}.

---

##### `binaryAst`<sup>Optional</sup> <a name="binaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.binaryAst"></a>

```typescript
public readonly binaryAst: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}.

---

##### `brotli`<sup>Optional</sup> <a name="brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.brotli"></a>

```typescript
public readonly brotli: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}.

---

##### `browserCacheTtl`<sup>Optional</sup> <a name="browserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCacheTtl"></a>

```typescript
public readonly browserCacheTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}.

---

##### `browserCheck`<sup>Optional</sup> <a name="browserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.browserCheck"></a>

```typescript
public readonly browserCheck: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}.

---

##### `cacheLevel`<sup>Optional</sup> <a name="cacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cacheLevel"></a>

```typescript
public readonly cacheLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}.

---

##### `challengeTtl`<sup>Optional</sup> <a name="challengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.challengeTtl"></a>

```typescript
public readonly challengeTtl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}.

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}.

---

##### `cnameFlattening`<sup>Optional</sup> <a name="cnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.cnameFlattening"></a>

```typescript
public readonly cnameFlattening: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}.

---

##### `developmentMode`<sup>Optional</sup> <a name="developmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.developmentMode"></a>

```typescript
public readonly developmentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}.

---

##### `earlyHints`<sup>Optional</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}.

---

##### `emailObfuscation`<sup>Optional</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}.

---

##### `filterLogsToCloudflare`<sup>Optional</sup> <a name="filterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.filterLogsToCloudflare"></a>

```typescript
public readonly filterLogsToCloudflare: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}.

---

##### `fonts`<sup>Optional</sup> <a name="fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.fonts"></a>

```typescript
public readonly fonts: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#fonts ZoneSettingsOverride#fonts}.

---

##### `h2Prioritization`<sup>Optional</sup> <a name="h2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.h2Prioritization"></a>

```typescript
public readonly h2Prioritization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}.

---

##### `hotlinkProtection`<sup>Optional</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}.

---

##### `http2`<sup>Optional</sup> <a name="http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}.

---

##### `http3`<sup>Optional</sup> <a name="http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.http3"></a>

```typescript
public readonly http3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}.

---

##### `imageResizing`<sup>Optional</sup> <a name="imageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.imageResizing"></a>

```typescript
public readonly imageResizing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}.

---

##### `ipGeolocation`<sup>Optional</sup> <a name="ipGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipGeolocation"></a>

```typescript
public readonly ipGeolocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}.

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}.

---

##### `logToCloudflare`<sup>Optional</sup> <a name="logToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.logToCloudflare"></a>

```typescript
public readonly logToCloudflare: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}.

---

##### `maxUpload`<sup>Optional</sup> <a name="maxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.maxUpload"></a>

```typescript
public readonly maxUpload: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}.

---

##### `minify`<sup>Optional</sup> <a name="minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minify"></a>

```typescript
public readonly minify: ZoneSettingsOverrideSettingsMinify;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

minify block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#minify ZoneSettingsOverride#minify}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}.

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mirage"></a>

```typescript
public readonly mirage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}.

---

##### `mobileRedirect`<sup>Optional</sup> <a name="mobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.mobileRedirect"></a>

```typescript
public readonly mobileRedirect: ZoneSettingsOverrideSettingsMobileRedirect;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

mobile_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#mobile_redirect ZoneSettingsOverride#mobile_redirect}

---

##### `nel`<sup>Optional</sup> <a name="nel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.nel"></a>

```typescript
public readonly nel: ZoneSettingsOverrideSettingsNel;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a>

nel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#nel ZoneSettingsOverride#nel}

---

##### `opportunisticEncryption`<sup>Optional</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}.

---

##### `opportunisticOnion`<sup>Optional</sup> <a name="opportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.opportunisticOnion"></a>

```typescript
public readonly opportunisticOnion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}.

---

##### `orangeToOrange`<sup>Optional</sup> <a name="orangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.orangeToOrange"></a>

```typescript
public readonly orangeToOrange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}.

---

##### `originErrorPagePassThru`<sup>Optional</sup> <a name="originErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originErrorPagePassThru"></a>

```typescript
public readonly originErrorPagePassThru: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}.

---

##### `originMaxHttpVersion`<sup>Optional</sup> <a name="originMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.originMaxHttpVersion"></a>

```typescript
public readonly originMaxHttpVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}.

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}.

---

##### `prefetchPreload`<sup>Optional</sup> <a name="prefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.prefetchPreload"></a>

```typescript
public readonly prefetchPreload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}.

---

##### `privacyPass`<sup>Optional</sup> <a name="privacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.privacyPass"></a>

```typescript
public readonly privacyPass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}.

---

##### `proxyReadTimeout`<sup>Optional</sup> <a name="proxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.proxyReadTimeout"></a>

```typescript
public readonly proxyReadTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}.

---

##### `pseudoIpv4`<sup>Optional</sup> <a name="pseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.pseudoIpv4"></a>

```typescript
public readonly pseudoIpv4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}.

---

##### `replaceInsecureJs`<sup>Optional</sup> <a name="replaceInsecureJs" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.replaceInsecureJs"></a>

```typescript
public readonly replaceInsecureJs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#replace_insecure_js ZoneSettingsOverride#replace_insecure_js}.

---

##### `responseBuffering`<sup>Optional</sup> <a name="responseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.responseBuffering"></a>

```typescript
public readonly responseBuffering: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}.

---

##### `rocketLoader`<sup>Optional</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}.

---

##### `securityHeader`<sup>Optional</sup> <a name="securityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityHeader"></a>

```typescript
public readonly securityHeader: ZoneSettingsOverrideSettingsSecurityHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

security_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#security_header ZoneSettingsOverride#security_header}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}.

---

##### `serverSideExclude`<sup>Optional</sup> <a name="serverSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.serverSideExclude"></a>

```typescript
public readonly serverSideExclude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}.

---

##### `sortQueryStringForCache`<sup>Optional</sup> <a name="sortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.sortQueryStringForCache"></a>

```typescript
public readonly sortQueryStringForCache: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}.

---

##### `speedBrain`<sup>Optional</sup> <a name="speedBrain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.speedBrain"></a>

```typescript
public readonly speedBrain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#speed_brain ZoneSettingsOverride#speed_brain}.

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}.

---

##### `tls12Only`<sup>Optional</sup> <a name="tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls12Only"></a>

```typescript
public readonly tls12Only: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}.

---

##### `tls13`<sup>Optional</sup> <a name="tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}.

---

##### `tlsClientAuth`<sup>Optional</sup> <a name="tlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.tlsClientAuth"></a>

```typescript
public readonly tlsClientAuth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}.

---

##### `trueClientIpHeader`<sup>Optional</sup> <a name="trueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.trueClientIpHeader"></a>

```typescript
public readonly trueClientIpHeader: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}.

---

##### `universalSsl`<sup>Optional</sup> <a name="universalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.universalSsl"></a>

```typescript
public readonly universalSsl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}.

---

##### `visitorIp`<sup>Optional</sup> <a name="visitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.visitorIp"></a>

```typescript
public readonly visitorIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}.

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}.

---

##### `webp`<sup>Optional</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.webp"></a>

```typescript
public readonly webp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}.

---

##### `websockets`<sup>Optional</sup> <a name="websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.websockets"></a>

```typescript
public readonly websockets: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}.

---

##### `zeroRtt`<sup>Optional</sup> <a name="zeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings.property.zeroRtt"></a>

```typescript
public readonly zeroRtt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}.

---

### ZoneSettingsOverrideSettingsMinify <a name="ZoneSettingsOverrideSettingsMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideSettingsMinify: zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css">css</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html">html</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js">js</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}. |

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}.

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}.

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify.property.js"></a>

```typescript
public readonly js: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}.

---

### ZoneSettingsOverrideSettingsMobileRedirect <a name="ZoneSettingsOverrideSettingsMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideSettingsMobileRedirect: zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain">mobileSubdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri">stripUri</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}. |

---

##### `mobileSubdomain`<sup>Required</sup> <a name="mobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.mobileSubdomain"></a>

```typescript
public readonly mobileSubdomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}.

---

##### `stripUri`<sup>Required</sup> <a name="stripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect.property.stripUri"></a>

```typescript
public readonly stripUri: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}.

---

### ZoneSettingsOverrideSettingsNel <a name="ZoneSettingsOverrideSettingsNel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideSettingsNel: zoneSettingsOverride.ZoneSettingsOverrideSettingsNel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}.

---

### ZoneSettingsOverrideSettingsSecurityHeader <a name="ZoneSettingsOverrideSettingsSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

const zoneSettingsOverrideSettingsSecurityHeader: zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains">includeSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge">maxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff">nosniff</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload">preload</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}.

---

##### `includeSubdomains`<sup>Optional</sup> <a name="includeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.includeSubdomains"></a>

```typescript
public readonly includeSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}.

---

##### `nosniff`<sup>Optional</sup> <a name="nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.nosniff"></a>

```typescript
public readonly nosniff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}.

---

##### `preload`<sup>Optional</sup> <a name="preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader.property.preload"></a>

```typescript
public readonly preload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSettingsOverrideInitialSettingsList <a name="ZoneSettingsOverrideInitialSettingsList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get"></a>

```typescript
public get(index: number): ZoneSettingsOverrideInitialSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMinifyList <a name="ZoneSettingsOverrideInitialSettingsMinifyList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get"></a>

```typescript
public get(index: number): ZoneSettingsOverrideInitialSettingsMinifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMinifyOutputReference <a name="ZoneSettingsOverrideInitialSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css">css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html">html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js">js</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.js"></a>

```typescript
public readonly js: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideInitialSettingsMinify;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinify">ZoneSettingsOverrideInitialSettingsMinify</a>

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectList <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get"></a>

```typescript
public get(index: number): ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain">mobileSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri">stripUri</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mobileSubdomain`<sup>Required</sup> <a name="mobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```typescript
public readonly mobileSubdomain: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stripUri`<sup>Required</sup> <a name="stripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.stripUri"></a>

```typescript
public readonly stripUri: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideInitialSettingsMobileRedirect;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirect">ZoneSettingsOverrideInitialSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideInitialSettingsNelList <a name="ZoneSettingsOverrideInitialSettingsNelList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.get"></a>

```typescript
public get(index: number): ZoneSettingsOverrideInitialSettingsNelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsNelOutputReference <a name="ZoneSettingsOverrideInitialSettingsNelOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNel">ZoneSettingsOverrideInitialSettingsNel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideInitialSettingsNel;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNel">ZoneSettingsOverrideInitialSettingsNel</a>

---


### ZoneSettingsOverrideInitialSettingsOutputReference <a name="ZoneSettingsOverrideInitialSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline">alwaysOnline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps">alwaysUseHttps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst">binaryAst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli">brotli</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl">browserCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck">browserCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel">cacheLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl">challengeTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening">cnameFlattening</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode">developmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare">filterLogsToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fonts">fonts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization">h2Prioritization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection">hotlinkProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2">http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3">http3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing">imageResizing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation">ipGeolocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare">logToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload">maxUpload</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify">minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage">mirage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect">mobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.nel">nel</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList">ZoneSettingsOverrideInitialSettingsNelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion">opportunisticOnion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange">orangeToOrange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru">originErrorPagePassThru</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion">originMaxHttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish">polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload">prefetchPreload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass">privacyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout">proxyReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4">pseudoIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.replaceInsecureJs">replaceInsecureJs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering">responseBuffering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader">securityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude">serverSideExclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache">sortQueryStringForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.speedBrain">speedBrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl">ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only">tls12Only</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13">tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth">tlsClientAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader">trueClientIpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl">universalSsl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp">visitorIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf">waf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp">webp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets">websockets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt">zeroRtt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alwaysOnline`<sup>Required</sup> <a name="alwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysOnline"></a>

```typescript
public readonly alwaysOnline: string;
```

- *Type:* string

---

##### `alwaysUseHttps`<sup>Required</sup> <a name="alwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.alwaysUseHttps"></a>

```typescript
public readonly alwaysUseHttps: string;
```

- *Type:* string

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: string;
```

- *Type:* string

---

##### `binaryAst`<sup>Required</sup> <a name="binaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.binaryAst"></a>

```typescript
public readonly binaryAst: string;
```

- *Type:* string

---

##### `brotli`<sup>Required</sup> <a name="brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.brotli"></a>

```typescript
public readonly brotli: string;
```

- *Type:* string

---

##### `browserCacheTtl`<sup>Required</sup> <a name="browserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCacheTtl"></a>

```typescript
public readonly browserCacheTtl: number;
```

- *Type:* number

---

##### `browserCheck`<sup>Required</sup> <a name="browserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.browserCheck"></a>

```typescript
public readonly browserCheck: string;
```

- *Type:* string

---

##### `cacheLevel`<sup>Required</sup> <a name="cacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cacheLevel"></a>

```typescript
public readonly cacheLevel: string;
```

- *Type:* string

---

##### `challengeTtl`<sup>Required</sup> <a name="challengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.challengeTtl"></a>

```typescript
public readonly challengeTtl: number;
```

- *Type:* number

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `cnameFlattening`<sup>Required</sup> <a name="cnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.cnameFlattening"></a>

```typescript
public readonly cnameFlattening: string;
```

- *Type:* string

---

##### `developmentMode`<sup>Required</sup> <a name="developmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.developmentMode"></a>

```typescript
public readonly developmentMode: string;
```

- *Type:* string

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: string;
```

- *Type:* string

---

##### `filterLogsToCloudflare`<sup>Required</sup> <a name="filterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.filterLogsToCloudflare"></a>

```typescript
public readonly filterLogsToCloudflare: string;
```

- *Type:* string

---

##### `fonts`<sup>Required</sup> <a name="fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.fonts"></a>

```typescript
public readonly fonts: string;
```

- *Type:* string

---

##### `h2Prioritization`<sup>Required</sup> <a name="h2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.h2Prioritization"></a>

```typescript
public readonly h2Prioritization: string;
```

- *Type:* string

---

##### `hotlinkProtection`<sup>Required</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: string;
```

- *Type:* string

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

---

##### `http3`<sup>Required</sup> <a name="http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.http3"></a>

```typescript
public readonly http3: string;
```

- *Type:* string

---

##### `imageResizing`<sup>Required</sup> <a name="imageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.imageResizing"></a>

```typescript
public readonly imageResizing: string;
```

- *Type:* string

---

##### `ipGeolocation`<sup>Required</sup> <a name="ipGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipGeolocation"></a>

```typescript
public readonly ipGeolocation: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `logToCloudflare`<sup>Required</sup> <a name="logToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.logToCloudflare"></a>

```typescript
public readonly logToCloudflare: string;
```

- *Type:* string

---

##### `maxUpload`<sup>Required</sup> <a name="maxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.maxUpload"></a>

```typescript
public readonly maxUpload: number;
```

- *Type:* number

---

##### `minify`<sup>Required</sup> <a name="minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minify"></a>

```typescript
public readonly minify: ZoneSettingsOverrideInitialSettingsMinifyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMinifyList">ZoneSettingsOverrideInitialSettingsMinifyList</a>

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mirage"></a>

```typescript
public readonly mirage: string;
```

- *Type:* string

---

##### `mobileRedirect`<sup>Required</sup> <a name="mobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.mobileRedirect"></a>

```typescript
public readonly mobileRedirect: ZoneSettingsOverrideInitialSettingsMobileRedirectList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsMobileRedirectList">ZoneSettingsOverrideInitialSettingsMobileRedirectList</a>

---

##### `nel`<sup>Required</sup> <a name="nel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.nel"></a>

```typescript
public readonly nel: ZoneSettingsOverrideInitialSettingsNelList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsNelList">ZoneSettingsOverrideInitialSettingsNelList</a>

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: string;
```

- *Type:* string

---

##### `opportunisticOnion`<sup>Required</sup> <a name="opportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.opportunisticOnion"></a>

```typescript
public readonly opportunisticOnion: string;
```

- *Type:* string

---

##### `orangeToOrange`<sup>Required</sup> <a name="orangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.orangeToOrange"></a>

```typescript
public readonly orangeToOrange: string;
```

- *Type:* string

---

##### `originErrorPagePassThru`<sup>Required</sup> <a name="originErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originErrorPagePassThru"></a>

```typescript
public readonly originErrorPagePassThru: string;
```

- *Type:* string

---

##### `originMaxHttpVersion`<sup>Required</sup> <a name="originMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.originMaxHttpVersion"></a>

```typescript
public readonly originMaxHttpVersion: string;
```

- *Type:* string

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

---

##### `prefetchPreload`<sup>Required</sup> <a name="prefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.prefetchPreload"></a>

```typescript
public readonly prefetchPreload: string;
```

- *Type:* string

---

##### `privacyPass`<sup>Required</sup> <a name="privacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.privacyPass"></a>

```typescript
public readonly privacyPass: string;
```

- *Type:* string

---

##### `proxyReadTimeout`<sup>Required</sup> <a name="proxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.proxyReadTimeout"></a>

```typescript
public readonly proxyReadTimeout: string;
```

- *Type:* string

---

##### `pseudoIpv4`<sup>Required</sup> <a name="pseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.pseudoIpv4"></a>

```typescript
public readonly pseudoIpv4: string;
```

- *Type:* string

---

##### `replaceInsecureJs`<sup>Required</sup> <a name="replaceInsecureJs" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.replaceInsecureJs"></a>

```typescript
public readonly replaceInsecureJs: string;
```

- *Type:* string

---

##### `responseBuffering`<sup>Required</sup> <a name="responseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.responseBuffering"></a>

```typescript
public readonly responseBuffering: string;
```

- *Type:* string

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: string;
```

- *Type:* string

---

##### `securityHeader`<sup>Required</sup> <a name="securityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityHeader"></a>

```typescript
public readonly securityHeader: ZoneSettingsOverrideInitialSettingsSecurityHeaderList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList">ZoneSettingsOverrideInitialSettingsSecurityHeaderList</a>

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `serverSideExclude`<sup>Required</sup> <a name="serverSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.serverSideExclude"></a>

```typescript
public readonly serverSideExclude: string;
```

- *Type:* string

---

##### `sortQueryStringForCache`<sup>Required</sup> <a name="sortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.sortQueryStringForCache"></a>

```typescript
public readonly sortQueryStringForCache: string;
```

- *Type:* string

---

##### `speedBrain`<sup>Required</sup> <a name="speedBrain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.speedBrain"></a>

```typescript
public readonly speedBrain: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

---

##### `tls12Only`<sup>Required</sup> <a name="tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls12Only"></a>

```typescript
public readonly tls12Only: string;
```

- *Type:* string

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

---

##### `tlsClientAuth`<sup>Required</sup> <a name="tlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.tlsClientAuth"></a>

```typescript
public readonly tlsClientAuth: string;
```

- *Type:* string

---

##### `trueClientIpHeader`<sup>Required</sup> <a name="trueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.trueClientIpHeader"></a>

```typescript
public readonly trueClientIpHeader: string;
```

- *Type:* string

---

##### `universalSsl`<sup>Required</sup> <a name="universalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.universalSsl"></a>

```typescript
public readonly universalSsl: string;
```

- *Type:* string

---

##### `visitorIp`<sup>Required</sup> <a name="visitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.visitorIp"></a>

```typescript
public readonly visitorIp: string;
```

- *Type:* string

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.webp"></a>

```typescript
public readonly webp: string;
```

- *Type:* string

---

##### `websockets`<sup>Required</sup> <a name="websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.websockets"></a>

```typescript
public readonly websockets: string;
```

- *Type:* string

---

##### `zeroRtt`<sup>Required</sup> <a name="zeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.zeroRtt"></a>

```typescript
public readonly zeroRtt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideInitialSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettings">ZoneSettingsOverrideInitialSettings</a>

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderList <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderList" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get"></a>

```typescript
public get(index: number): ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains">includeSubdomains</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff">nosniff</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload">preload</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `includeSubdomains`<sup>Required</sup> <a name="includeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```typescript
public readonly includeSubdomains: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `nosniff`<sup>Required</sup> <a name="nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```typescript
public readonly nosniff: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `preload`<sup>Required</sup> <a name="preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.preload"></a>

```typescript
public readonly preload: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideInitialSettingsSecurityHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideInitialSettingsSecurityHeader">ZoneSettingsOverrideInitialSettingsSecurityHeader</a>

---


### ZoneSettingsOverrideSettingsMinifyOutputReference <a name="ZoneSettingsOverrideSettingsMinifyOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput">cssInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput">htmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput">jsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css">css</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html">html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js">js</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cssInput`<sup>Optional</sup> <a name="cssInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.cssInput"></a>

```typescript
public readonly cssInput: string;
```

- *Type:* string

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.htmlInput"></a>

```typescript
public readonly htmlInput: string;
```

- *Type:* string

---

##### `jsInput`<sup>Optional</sup> <a name="jsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.jsInput"></a>

```typescript
public readonly jsInput: string;
```

- *Type:* string

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.css"></a>

```typescript
public readonly css: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.html"></a>

```typescript
public readonly html: string;
```

- *Type:* string

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.js"></a>

```typescript
public readonly js: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideSettingsMinify;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---


### ZoneSettingsOverrideSettingsMobileRedirectOutputReference <a name="ZoneSettingsOverrideSettingsMobileRedirectOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput">mobileSubdomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput">stripUriInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain">mobileSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri">stripUri</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mobileSubdomainInput`<sup>Optional</sup> <a name="mobileSubdomainInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomainInput"></a>

```typescript
public readonly mobileSubdomainInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `stripUriInput`<sup>Optional</sup> <a name="stripUriInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUriInput"></a>

```typescript
public readonly stripUriInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mobileSubdomain`<sup>Required</sup> <a name="mobileSubdomain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.mobileSubdomain"></a>

```typescript
public readonly mobileSubdomain: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stripUri`<sup>Required</sup> <a name="stripUri" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.stripUri"></a>

```typescript
public readonly stripUri: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideSettingsMobileRedirect;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---


### ZoneSettingsOverrideSettingsNelOutputReference <a name="ZoneSettingsOverrideSettingsNelOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideSettingsNel;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a>

---


### ZoneSettingsOverrideSettingsOutputReference <a name="ZoneSettingsOverrideSettingsOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify">putMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect">putMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putNel">putNel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader">putSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline">resetAlwaysOnline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps">resetAlwaysUseHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites">resetAutomaticHttpsRewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst">resetBinaryAst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli">resetBrotli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl">resetBrowserCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck">resetBrowserCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel">resetCacheLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl">resetChallengeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening">resetCnameFlattening</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode">resetDevelopmentMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints">resetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation">resetEmailObfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare">resetFilterLogsToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFonts">resetFonts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization">resetH2Prioritization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection">resetHotlinkProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2">resetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3">resetHttp3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing">resetImageResizing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation">resetIpGeolocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare">resetLogToCloudflare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload">resetMaxUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify">resetMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage">resetMirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect">resetMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetNel">resetNel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption">resetOpportunisticEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion">resetOpportunisticOnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange">resetOrangeToOrange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru">resetOriginErrorPagePassThru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion">resetOriginMaxHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish">resetPolish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload">resetPrefetchPreload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass">resetPrivacyPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout">resetProxyReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4">resetPseudoIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetReplaceInsecureJs">resetReplaceInsecureJs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering">resetResponseBuffering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader">resetRocketLoader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader">resetSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude">resetServerSideExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache">resetSortQueryStringForCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSpeedBrain">resetSpeedBrain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl">resetSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only">resetTls12Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13">resetTls13</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth">resetTlsClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader">resetTrueClientIpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl">resetUniversalSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp">resetVisitorIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf">resetWaf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp">resetWebp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets">resetWebsockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt">resetZeroRtt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMinify` <a name="putMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify"></a>

```typescript
public putMinify(value: ZoneSettingsOverrideSettingsMinify): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMinify.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `putMobileRedirect` <a name="putMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect"></a>

```typescript
public putMobileRedirect(value: ZoneSettingsOverrideSettingsMobileRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putMobileRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `putNel` <a name="putNel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putNel"></a>

```typescript
public putNel(value: ZoneSettingsOverrideSettingsNel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putNel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a>

---

##### `putSecurityHeader` <a name="putSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader"></a>

```typescript
public putSecurityHeader(value: ZoneSettingsOverrideSettingsSecurityHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.putSecurityHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `resetAlwaysOnline` <a name="resetAlwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysOnline"></a>

```typescript
public resetAlwaysOnline(): void
```

##### `resetAlwaysUseHttps` <a name="resetAlwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAlwaysUseHttps"></a>

```typescript
public resetAlwaysUseHttps(): void
```

##### `resetAutomaticHttpsRewrites` <a name="resetAutomaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetAutomaticHttpsRewrites"></a>

```typescript
public resetAutomaticHttpsRewrites(): void
```

##### `resetBinaryAst` <a name="resetBinaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBinaryAst"></a>

```typescript
public resetBinaryAst(): void
```

##### `resetBrotli` <a name="resetBrotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrotli"></a>

```typescript
public resetBrotli(): void
```

##### `resetBrowserCacheTtl` <a name="resetBrowserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCacheTtl"></a>

```typescript
public resetBrowserCacheTtl(): void
```

##### `resetBrowserCheck` <a name="resetBrowserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetBrowserCheck"></a>

```typescript
public resetBrowserCheck(): void
```

##### `resetCacheLevel` <a name="resetCacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCacheLevel"></a>

```typescript
public resetCacheLevel(): void
```

##### `resetChallengeTtl` <a name="resetChallengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetChallengeTtl"></a>

```typescript
public resetChallengeTtl(): void
```

##### `resetCiphers` <a name="resetCiphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCiphers"></a>

```typescript
public resetCiphers(): void
```

##### `resetCnameFlattening` <a name="resetCnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetCnameFlattening"></a>

```typescript
public resetCnameFlattening(): void
```

##### `resetDevelopmentMode` <a name="resetDevelopmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetDevelopmentMode"></a>

```typescript
public resetDevelopmentMode(): void
```

##### `resetEarlyHints` <a name="resetEarlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEarlyHints"></a>

```typescript
public resetEarlyHints(): void
```

##### `resetEmailObfuscation` <a name="resetEmailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetEmailObfuscation"></a>

```typescript
public resetEmailObfuscation(): void
```

##### `resetFilterLogsToCloudflare` <a name="resetFilterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFilterLogsToCloudflare"></a>

```typescript
public resetFilterLogsToCloudflare(): void
```

##### `resetFonts` <a name="resetFonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetFonts"></a>

```typescript
public resetFonts(): void
```

##### `resetH2Prioritization` <a name="resetH2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetH2Prioritization"></a>

```typescript
public resetH2Prioritization(): void
```

##### `resetHotlinkProtection` <a name="resetHotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHotlinkProtection"></a>

```typescript
public resetHotlinkProtection(): void
```

##### `resetHttp2` <a name="resetHttp2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp2"></a>

```typescript
public resetHttp2(): void
```

##### `resetHttp3` <a name="resetHttp3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetHttp3"></a>

```typescript
public resetHttp3(): void
```

##### `resetImageResizing` <a name="resetImageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetImageResizing"></a>

```typescript
public resetImageResizing(): void
```

##### `resetIpGeolocation` <a name="resetIpGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpGeolocation"></a>

```typescript
public resetIpGeolocation(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetLogToCloudflare` <a name="resetLogToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetLogToCloudflare"></a>

```typescript
public resetLogToCloudflare(): void
```

##### `resetMaxUpload` <a name="resetMaxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMaxUpload"></a>

```typescript
public resetMaxUpload(): void
```

##### `resetMinify` <a name="resetMinify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinify"></a>

```typescript
public resetMinify(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetMirage` <a name="resetMirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMirage"></a>

```typescript
public resetMirage(): void
```

##### `resetMobileRedirect` <a name="resetMobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetMobileRedirect"></a>

```typescript
public resetMobileRedirect(): void
```

##### `resetNel` <a name="resetNel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetNel"></a>

```typescript
public resetNel(): void
```

##### `resetOpportunisticEncryption` <a name="resetOpportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticEncryption"></a>

```typescript
public resetOpportunisticEncryption(): void
```

##### `resetOpportunisticOnion` <a name="resetOpportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOpportunisticOnion"></a>

```typescript
public resetOpportunisticOnion(): void
```

##### `resetOrangeToOrange` <a name="resetOrangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOrangeToOrange"></a>

```typescript
public resetOrangeToOrange(): void
```

##### `resetOriginErrorPagePassThru` <a name="resetOriginErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginErrorPagePassThru"></a>

```typescript
public resetOriginErrorPagePassThru(): void
```

##### `resetOriginMaxHttpVersion` <a name="resetOriginMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetOriginMaxHttpVersion"></a>

```typescript
public resetOriginMaxHttpVersion(): void
```

##### `resetPolish` <a name="resetPolish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPolish"></a>

```typescript
public resetPolish(): void
```

##### `resetPrefetchPreload` <a name="resetPrefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrefetchPreload"></a>

```typescript
public resetPrefetchPreload(): void
```

##### `resetPrivacyPass` <a name="resetPrivacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPrivacyPass"></a>

```typescript
public resetPrivacyPass(): void
```

##### `resetProxyReadTimeout` <a name="resetProxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetProxyReadTimeout"></a>

```typescript
public resetProxyReadTimeout(): void
```

##### `resetPseudoIpv4` <a name="resetPseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetPseudoIpv4"></a>

```typescript
public resetPseudoIpv4(): void
```

##### `resetReplaceInsecureJs` <a name="resetReplaceInsecureJs" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetReplaceInsecureJs"></a>

```typescript
public resetReplaceInsecureJs(): void
```

##### `resetResponseBuffering` <a name="resetResponseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetResponseBuffering"></a>

```typescript
public resetResponseBuffering(): void
```

##### `resetRocketLoader` <a name="resetRocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetRocketLoader"></a>

```typescript
public resetRocketLoader(): void
```

##### `resetSecurityHeader` <a name="resetSecurityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityHeader"></a>

```typescript
public resetSecurityHeader(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetServerSideExclude` <a name="resetServerSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetServerSideExclude"></a>

```typescript
public resetServerSideExclude(): void
```

##### `resetSortQueryStringForCache` <a name="resetSortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSortQueryStringForCache"></a>

```typescript
public resetSortQueryStringForCache(): void
```

##### `resetSpeedBrain` <a name="resetSpeedBrain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSpeedBrain"></a>

```typescript
public resetSpeedBrain(): void
```

##### `resetSsl` <a name="resetSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetSsl"></a>

```typescript
public resetSsl(): void
```

##### `resetTls12Only` <a name="resetTls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls12Only"></a>

```typescript
public resetTls12Only(): void
```

##### `resetTls13` <a name="resetTls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTls13"></a>

```typescript
public resetTls13(): void
```

##### `resetTlsClientAuth` <a name="resetTlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTlsClientAuth"></a>

```typescript
public resetTlsClientAuth(): void
```

##### `resetTrueClientIpHeader` <a name="resetTrueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetTrueClientIpHeader"></a>

```typescript
public resetTrueClientIpHeader(): void
```

##### `resetUniversalSsl` <a name="resetUniversalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetUniversalSsl"></a>

```typescript
public resetUniversalSsl(): void
```

##### `resetVisitorIp` <a name="resetVisitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetVisitorIp"></a>

```typescript
public resetVisitorIp(): void
```

##### `resetWaf` <a name="resetWaf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWaf"></a>

```typescript
public resetWaf(): void
```

##### `resetWebp` <a name="resetWebp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebp"></a>

```typescript
public resetWebp(): void
```

##### `resetWebsockets` <a name="resetWebsockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetWebsockets"></a>

```typescript
public resetWebsockets(): void
```

##### `resetZeroRtt` <a name="resetZeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.resetZeroRtt"></a>

```typescript
public resetZeroRtt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify">minify</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect">mobileRedirect</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.nel">nel</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference">ZoneSettingsOverrideSettingsNelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader">securityHeader</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput">alwaysOnlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput">alwaysUseHttpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput">automaticHttpsRewritesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput">binaryAstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput">brotliInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput">browserCacheTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput">browserCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput">cacheLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput">challengeTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput">cnameFlatteningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput">developmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput">earlyHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput">emailObfuscationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput">filterLogsToCloudflareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fontsInput">fontsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput">h2PrioritizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput">hotlinkProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input">http2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input">http3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput">imageResizingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput">ipGeolocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input">ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput">logToCloudflareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput">maxUploadInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput">minifyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput">mirageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput">mobileRedirectInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.nelInput">nelInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput">opportunisticEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput">opportunisticOnionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput">orangeToOrangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput">originErrorPagePassThruInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput">originMaxHttpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput">polishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput">prefetchPreloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput">privacyPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput">proxyReadTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input">pseudoIpv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.replaceInsecureJsInput">replaceInsecureJsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput">responseBufferingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput">rocketLoaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput">securityHeaderInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput">serverSideExcludeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput">sortQueryStringForCacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.speedBrainInput">speedBrainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput">sslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput">tls12OnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input">tls13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput">tlsClientAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput">trueClientIpHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput">universalSslInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput">visitorIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput">wafInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput">webpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput">websocketsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput">zeroRttInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline">alwaysOnline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps">alwaysUseHttps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst">binaryAst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli">brotli</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl">browserCacheTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck">browserCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel">cacheLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl">challengeTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers">ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening">cnameFlattening</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode">developmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints">earlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare">filterLogsToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fonts">fonts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization">h2Prioritization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection">hotlinkProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2">http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3">http3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing">imageResizing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation">ipGeolocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6">ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare">logToCloudflare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload">maxUpload</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage">mirage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion">opportunisticOnion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange">orangeToOrange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru">originErrorPagePassThru</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion">originMaxHttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish">polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload">prefetchPreload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass">privacyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout">proxyReadTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4">pseudoIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.replaceInsecureJs">replaceInsecureJs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering">responseBuffering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude">serverSideExclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache">sortQueryStringForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.speedBrain">speedBrain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl">ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only">tls12Only</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13">tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth">tlsClientAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader">trueClientIpHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl">universalSsl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp">visitorIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf">waf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp">webp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets">websockets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt">zeroRtt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minify`<sup>Required</sup> <a name="minify" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minify"></a>

```typescript
public readonly minify: ZoneSettingsOverrideSettingsMinifyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinifyOutputReference">ZoneSettingsOverrideSettingsMinifyOutputReference</a>

---

##### `mobileRedirect`<sup>Required</sup> <a name="mobileRedirect" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirect"></a>

```typescript
public readonly mobileRedirect: ZoneSettingsOverrideSettingsMobileRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirectOutputReference">ZoneSettingsOverrideSettingsMobileRedirectOutputReference</a>

---

##### `nel`<sup>Required</sup> <a name="nel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.nel"></a>

```typescript
public readonly nel: ZoneSettingsOverrideSettingsNelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNelOutputReference">ZoneSettingsOverrideSettingsNelOutputReference</a>

---

##### `securityHeader`<sup>Required</sup> <a name="securityHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeader"></a>

```typescript
public readonly securityHeader: ZoneSettingsOverrideSettingsSecurityHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference">ZoneSettingsOverrideSettingsSecurityHeaderOutputReference</a>

---

##### `alwaysOnlineInput`<sup>Optional</sup> <a name="alwaysOnlineInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnlineInput"></a>

```typescript
public readonly alwaysOnlineInput: string;
```

- *Type:* string

---

##### `alwaysUseHttpsInput`<sup>Optional</sup> <a name="alwaysUseHttpsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttpsInput"></a>

```typescript
public readonly alwaysUseHttpsInput: string;
```

- *Type:* string

---

##### `automaticHttpsRewritesInput`<sup>Optional</sup> <a name="automaticHttpsRewritesInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewritesInput"></a>

```typescript
public readonly automaticHttpsRewritesInput: string;
```

- *Type:* string

---

##### `binaryAstInput`<sup>Optional</sup> <a name="binaryAstInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAstInput"></a>

```typescript
public readonly binaryAstInput: string;
```

- *Type:* string

---

##### `brotliInput`<sup>Optional</sup> <a name="brotliInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotliInput"></a>

```typescript
public readonly brotliInput: string;
```

- *Type:* string

---

##### `browserCacheTtlInput`<sup>Optional</sup> <a name="browserCacheTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtlInput"></a>

```typescript
public readonly browserCacheTtlInput: number;
```

- *Type:* number

---

##### `browserCheckInput`<sup>Optional</sup> <a name="browserCheckInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheckInput"></a>

```typescript
public readonly browserCheckInput: string;
```

- *Type:* string

---

##### `cacheLevelInput`<sup>Optional</sup> <a name="cacheLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevelInput"></a>

```typescript
public readonly cacheLevelInput: string;
```

- *Type:* string

---

##### `challengeTtlInput`<sup>Optional</sup> <a name="challengeTtlInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtlInput"></a>

```typescript
public readonly challengeTtlInput: number;
```

- *Type:* number

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphersInput"></a>

```typescript
public readonly ciphersInput: string[];
```

- *Type:* string[]

---

##### `cnameFlatteningInput`<sup>Optional</sup> <a name="cnameFlatteningInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlatteningInput"></a>

```typescript
public readonly cnameFlatteningInput: string;
```

- *Type:* string

---

##### `developmentModeInput`<sup>Optional</sup> <a name="developmentModeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentModeInput"></a>

```typescript
public readonly developmentModeInput: string;
```

- *Type:* string

---

##### `earlyHintsInput`<sup>Optional</sup> <a name="earlyHintsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHintsInput"></a>

```typescript
public readonly earlyHintsInput: string;
```

- *Type:* string

---

##### `emailObfuscationInput`<sup>Optional</sup> <a name="emailObfuscationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscationInput"></a>

```typescript
public readonly emailObfuscationInput: string;
```

- *Type:* string

---

##### `filterLogsToCloudflareInput`<sup>Optional</sup> <a name="filterLogsToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflareInput"></a>

```typescript
public readonly filterLogsToCloudflareInput: string;
```

- *Type:* string

---

##### `fontsInput`<sup>Optional</sup> <a name="fontsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fontsInput"></a>

```typescript
public readonly fontsInput: string;
```

- *Type:* string

---

##### `h2PrioritizationInput`<sup>Optional</sup> <a name="h2PrioritizationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2PrioritizationInput"></a>

```typescript
public readonly h2PrioritizationInput: string;
```

- *Type:* string

---

##### `hotlinkProtectionInput`<sup>Optional</sup> <a name="hotlinkProtectionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtectionInput"></a>

```typescript
public readonly hotlinkProtectionInput: string;
```

- *Type:* string

---

##### `http2Input`<sup>Optional</sup> <a name="http2Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2Input"></a>

```typescript
public readonly http2Input: string;
```

- *Type:* string

---

##### `http3Input`<sup>Optional</sup> <a name="http3Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3Input"></a>

```typescript
public readonly http3Input: string;
```

- *Type:* string

---

##### `imageResizingInput`<sup>Optional</sup> <a name="imageResizingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizingInput"></a>

```typescript
public readonly imageResizingInput: string;
```

- *Type:* string

---

##### `ipGeolocationInput`<sup>Optional</sup> <a name="ipGeolocationInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocationInput"></a>

```typescript
public readonly ipGeolocationInput: string;
```

- *Type:* string

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: string;
```

- *Type:* string

---

##### `logToCloudflareInput`<sup>Optional</sup> <a name="logToCloudflareInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflareInput"></a>

```typescript
public readonly logToCloudflareInput: string;
```

- *Type:* string

---

##### `maxUploadInput`<sup>Optional</sup> <a name="maxUploadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUploadInput"></a>

```typescript
public readonly maxUploadInput: number;
```

- *Type:* number

---

##### `minifyInput`<sup>Optional</sup> <a name="minifyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minifyInput"></a>

```typescript
public readonly minifyInput: ZoneSettingsOverrideSettingsMinify;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMinify">ZoneSettingsOverrideSettingsMinify</a>

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `mirageInput`<sup>Optional</sup> <a name="mirageInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirageInput"></a>

```typescript
public readonly mirageInput: string;
```

- *Type:* string

---

##### `mobileRedirectInput`<sup>Optional</sup> <a name="mobileRedirectInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mobileRedirectInput"></a>

```typescript
public readonly mobileRedirectInput: ZoneSettingsOverrideSettingsMobileRedirect;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsMobileRedirect">ZoneSettingsOverrideSettingsMobileRedirect</a>

---

##### `nelInput`<sup>Optional</sup> <a name="nelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.nelInput"></a>

```typescript
public readonly nelInput: ZoneSettingsOverrideSettingsNel;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsNel">ZoneSettingsOverrideSettingsNel</a>

---

##### `opportunisticEncryptionInput`<sup>Optional</sup> <a name="opportunisticEncryptionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryptionInput"></a>

```typescript
public readonly opportunisticEncryptionInput: string;
```

- *Type:* string

---

##### `opportunisticOnionInput`<sup>Optional</sup> <a name="opportunisticOnionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnionInput"></a>

```typescript
public readonly opportunisticOnionInput: string;
```

- *Type:* string

---

##### `orangeToOrangeInput`<sup>Optional</sup> <a name="orangeToOrangeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrangeInput"></a>

```typescript
public readonly orangeToOrangeInput: string;
```

- *Type:* string

---

##### `originErrorPagePassThruInput`<sup>Optional</sup> <a name="originErrorPagePassThruInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThruInput"></a>

```typescript
public readonly originErrorPagePassThruInput: string;
```

- *Type:* string

---

##### `originMaxHttpVersionInput`<sup>Optional</sup> <a name="originMaxHttpVersionInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersionInput"></a>

```typescript
public readonly originMaxHttpVersionInput: string;
```

- *Type:* string

---

##### `polishInput`<sup>Optional</sup> <a name="polishInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polishInput"></a>

```typescript
public readonly polishInput: string;
```

- *Type:* string

---

##### `prefetchPreloadInput`<sup>Optional</sup> <a name="prefetchPreloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreloadInput"></a>

```typescript
public readonly prefetchPreloadInput: string;
```

- *Type:* string

---

##### `privacyPassInput`<sup>Optional</sup> <a name="privacyPassInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPassInput"></a>

```typescript
public readonly privacyPassInput: string;
```

- *Type:* string

---

##### `proxyReadTimeoutInput`<sup>Optional</sup> <a name="proxyReadTimeoutInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeoutInput"></a>

```typescript
public readonly proxyReadTimeoutInput: string;
```

- *Type:* string

---

##### `pseudoIpv4Input`<sup>Optional</sup> <a name="pseudoIpv4Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4Input"></a>

```typescript
public readonly pseudoIpv4Input: string;
```

- *Type:* string

---

##### `replaceInsecureJsInput`<sup>Optional</sup> <a name="replaceInsecureJsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.replaceInsecureJsInput"></a>

```typescript
public readonly replaceInsecureJsInput: string;
```

- *Type:* string

---

##### `responseBufferingInput`<sup>Optional</sup> <a name="responseBufferingInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBufferingInput"></a>

```typescript
public readonly responseBufferingInput: string;
```

- *Type:* string

---

##### `rocketLoaderInput`<sup>Optional</sup> <a name="rocketLoaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoaderInput"></a>

```typescript
public readonly rocketLoaderInput: string;
```

- *Type:* string

---

##### `securityHeaderInput`<sup>Optional</sup> <a name="securityHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityHeaderInput"></a>

```typescript
public readonly securityHeaderInput: ZoneSettingsOverrideSettingsSecurityHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `serverSideExcludeInput`<sup>Optional</sup> <a name="serverSideExcludeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExcludeInput"></a>

```typescript
public readonly serverSideExcludeInput: string;
```

- *Type:* string

---

##### `sortQueryStringForCacheInput`<sup>Optional</sup> <a name="sortQueryStringForCacheInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCacheInput"></a>

```typescript
public readonly sortQueryStringForCacheInput: string;
```

- *Type:* string

---

##### `speedBrainInput`<sup>Optional</sup> <a name="speedBrainInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.speedBrainInput"></a>

```typescript
public readonly speedBrainInput: string;
```

- *Type:* string

---

##### `sslInput`<sup>Optional</sup> <a name="sslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sslInput"></a>

```typescript
public readonly sslInput: string;
```

- *Type:* string

---

##### `tls12OnlyInput`<sup>Optional</sup> <a name="tls12OnlyInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12OnlyInput"></a>

```typescript
public readonly tls12OnlyInput: string;
```

- *Type:* string

---

##### `tls13Input`<sup>Optional</sup> <a name="tls13Input" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13Input"></a>

```typescript
public readonly tls13Input: string;
```

- *Type:* string

---

##### `tlsClientAuthInput`<sup>Optional</sup> <a name="tlsClientAuthInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuthInput"></a>

```typescript
public readonly tlsClientAuthInput: string;
```

- *Type:* string

---

##### `trueClientIpHeaderInput`<sup>Optional</sup> <a name="trueClientIpHeaderInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeaderInput"></a>

```typescript
public readonly trueClientIpHeaderInput: string;
```

- *Type:* string

---

##### `universalSslInput`<sup>Optional</sup> <a name="universalSslInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSslInput"></a>

```typescript
public readonly universalSslInput: string;
```

- *Type:* string

---

##### `visitorIpInput`<sup>Optional</sup> <a name="visitorIpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIpInput"></a>

```typescript
public readonly visitorIpInput: string;
```

- *Type:* string

---

##### `wafInput`<sup>Optional</sup> <a name="wafInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.wafInput"></a>

```typescript
public readonly wafInput: string;
```

- *Type:* string

---

##### `webpInput`<sup>Optional</sup> <a name="webpInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webpInput"></a>

```typescript
public readonly webpInput: string;
```

- *Type:* string

---

##### `websocketsInput`<sup>Optional</sup> <a name="websocketsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websocketsInput"></a>

```typescript
public readonly websocketsInput: string;
```

- *Type:* string

---

##### `zeroRttInput`<sup>Optional</sup> <a name="zeroRttInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRttInput"></a>

```typescript
public readonly zeroRttInput: string;
```

- *Type:* string

---

##### `alwaysOnline`<sup>Required</sup> <a name="alwaysOnline" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysOnline"></a>

```typescript
public readonly alwaysOnline: string;
```

- *Type:* string

---

##### `alwaysUseHttps`<sup>Required</sup> <a name="alwaysUseHttps" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.alwaysUseHttps"></a>

```typescript
public readonly alwaysUseHttps: string;
```

- *Type:* string

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: string;
```

- *Type:* string

---

##### `binaryAst`<sup>Required</sup> <a name="binaryAst" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.binaryAst"></a>

```typescript
public readonly binaryAst: string;
```

- *Type:* string

---

##### `brotli`<sup>Required</sup> <a name="brotli" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.brotli"></a>

```typescript
public readonly brotli: string;
```

- *Type:* string

---

##### `browserCacheTtl`<sup>Required</sup> <a name="browserCacheTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCacheTtl"></a>

```typescript
public readonly browserCacheTtl: number;
```

- *Type:* number

---

##### `browserCheck`<sup>Required</sup> <a name="browserCheck" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.browserCheck"></a>

```typescript
public readonly browserCheck: string;
```

- *Type:* string

---

##### `cacheLevel`<sup>Required</sup> <a name="cacheLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cacheLevel"></a>

```typescript
public readonly cacheLevel: string;
```

- *Type:* string

---

##### `challengeTtl`<sup>Required</sup> <a name="challengeTtl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.challengeTtl"></a>

```typescript
public readonly challengeTtl: number;
```

- *Type:* number

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ciphers"></a>

```typescript
public readonly ciphers: string[];
```

- *Type:* string[]

---

##### `cnameFlattening`<sup>Required</sup> <a name="cnameFlattening" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.cnameFlattening"></a>

```typescript
public readonly cnameFlattening: string;
```

- *Type:* string

---

##### `developmentMode`<sup>Required</sup> <a name="developmentMode" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.developmentMode"></a>

```typescript
public readonly developmentMode: string;
```

- *Type:* string

---

##### `earlyHints`<sup>Required</sup> <a name="earlyHints" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.earlyHints"></a>

```typescript
public readonly earlyHints: string;
```

- *Type:* string

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: string;
```

- *Type:* string

---

##### `filterLogsToCloudflare`<sup>Required</sup> <a name="filterLogsToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.filterLogsToCloudflare"></a>

```typescript
public readonly filterLogsToCloudflare: string;
```

- *Type:* string

---

##### `fonts`<sup>Required</sup> <a name="fonts" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.fonts"></a>

```typescript
public readonly fonts: string;
```

- *Type:* string

---

##### `h2Prioritization`<sup>Required</sup> <a name="h2Prioritization" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.h2Prioritization"></a>

```typescript
public readonly h2Prioritization: string;
```

- *Type:* string

---

##### `hotlinkProtection`<sup>Required</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: string;
```

- *Type:* string

---

##### `http2`<sup>Required</sup> <a name="http2" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http2"></a>

```typescript
public readonly http2: string;
```

- *Type:* string

---

##### `http3`<sup>Required</sup> <a name="http3" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.http3"></a>

```typescript
public readonly http3: string;
```

- *Type:* string

---

##### `imageResizing`<sup>Required</sup> <a name="imageResizing" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.imageResizing"></a>

```typescript
public readonly imageResizing: string;
```

- *Type:* string

---

##### `ipGeolocation`<sup>Required</sup> <a name="ipGeolocation" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipGeolocation"></a>

```typescript
public readonly ipGeolocation: string;
```

- *Type:* string

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ipv6"></a>

```typescript
public readonly ipv6: string;
```

- *Type:* string

---

##### `logToCloudflare`<sup>Required</sup> <a name="logToCloudflare" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.logToCloudflare"></a>

```typescript
public readonly logToCloudflare: string;
```

- *Type:* string

---

##### `maxUpload`<sup>Required</sup> <a name="maxUpload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.maxUpload"></a>

```typescript
public readonly maxUpload: number;
```

- *Type:* number

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.mirage"></a>

```typescript
public readonly mirage: string;
```

- *Type:* string

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: string;
```

- *Type:* string

---

##### `opportunisticOnion`<sup>Required</sup> <a name="opportunisticOnion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.opportunisticOnion"></a>

```typescript
public readonly opportunisticOnion: string;
```

- *Type:* string

---

##### `orangeToOrange`<sup>Required</sup> <a name="orangeToOrange" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.orangeToOrange"></a>

```typescript
public readonly orangeToOrange: string;
```

- *Type:* string

---

##### `originErrorPagePassThru`<sup>Required</sup> <a name="originErrorPagePassThru" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originErrorPagePassThru"></a>

```typescript
public readonly originErrorPagePassThru: string;
```

- *Type:* string

---

##### `originMaxHttpVersion`<sup>Required</sup> <a name="originMaxHttpVersion" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.originMaxHttpVersion"></a>

```typescript
public readonly originMaxHttpVersion: string;
```

- *Type:* string

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

---

##### `prefetchPreload`<sup>Required</sup> <a name="prefetchPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.prefetchPreload"></a>

```typescript
public readonly prefetchPreload: string;
```

- *Type:* string

---

##### `privacyPass`<sup>Required</sup> <a name="privacyPass" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.privacyPass"></a>

```typescript
public readonly privacyPass: string;
```

- *Type:* string

---

##### `proxyReadTimeout`<sup>Required</sup> <a name="proxyReadTimeout" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.proxyReadTimeout"></a>

```typescript
public readonly proxyReadTimeout: string;
```

- *Type:* string

---

##### `pseudoIpv4`<sup>Required</sup> <a name="pseudoIpv4" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.pseudoIpv4"></a>

```typescript
public readonly pseudoIpv4: string;
```

- *Type:* string

---

##### `replaceInsecureJs`<sup>Required</sup> <a name="replaceInsecureJs" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.replaceInsecureJs"></a>

```typescript
public readonly replaceInsecureJs: string;
```

- *Type:* string

---

##### `responseBuffering`<sup>Required</sup> <a name="responseBuffering" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.responseBuffering"></a>

```typescript
public readonly responseBuffering: string;
```

- *Type:* string

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `serverSideExclude`<sup>Required</sup> <a name="serverSideExclude" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.serverSideExclude"></a>

```typescript
public readonly serverSideExclude: string;
```

- *Type:* string

---

##### `sortQueryStringForCache`<sup>Required</sup> <a name="sortQueryStringForCache" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.sortQueryStringForCache"></a>

```typescript
public readonly sortQueryStringForCache: string;
```

- *Type:* string

---

##### `speedBrain`<sup>Required</sup> <a name="speedBrain" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.speedBrain"></a>

```typescript
public readonly speedBrain: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

---

##### `tls12Only`<sup>Required</sup> <a name="tls12Only" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls12Only"></a>

```typescript
public readonly tls12Only: string;
```

- *Type:* string

---

##### `tls13`<sup>Required</sup> <a name="tls13" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tls13"></a>

```typescript
public readonly tls13: string;
```

- *Type:* string

---

##### `tlsClientAuth`<sup>Required</sup> <a name="tlsClientAuth" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.tlsClientAuth"></a>

```typescript
public readonly tlsClientAuth: string;
```

- *Type:* string

---

##### `trueClientIpHeader`<sup>Required</sup> <a name="trueClientIpHeader" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.trueClientIpHeader"></a>

```typescript
public readonly trueClientIpHeader: string;
```

- *Type:* string

---

##### `universalSsl`<sup>Required</sup> <a name="universalSsl" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.universalSsl"></a>

```typescript
public readonly universalSsl: string;
```

- *Type:* string

---

##### `visitorIp`<sup>Required</sup> <a name="visitorIp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.visitorIp"></a>

```typescript
public readonly visitorIp: string;
```

- *Type:* string

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

---

##### `webp`<sup>Required</sup> <a name="webp" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.webp"></a>

```typescript
public readonly webp: string;
```

- *Type:* string

---

##### `websockets`<sup>Required</sup> <a name="websockets" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.websockets"></a>

```typescript
public readonly websockets: string;
```

- *Type:* string

---

##### `zeroRtt`<sup>Required</sup> <a name="zeroRtt" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.zeroRtt"></a>

```typescript
public readonly zeroRtt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettings">ZoneSettingsOverrideSettings</a>

---


### ZoneSettingsOverrideSettingsSecurityHeaderOutputReference <a name="ZoneSettingsOverrideSettingsSecurityHeaderOutputReference" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer"></a>

```typescript
import { zoneSettingsOverride } from '@cdktf/provider-cloudflare'

new zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains">resetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff">resetNosniff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload">resetPreload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIncludeSubdomains` <a name="resetIncludeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetIncludeSubdomains"></a>

```typescript
public resetIncludeSubdomains(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetNosniff` <a name="resetNosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetNosniff"></a>

```typescript
public resetNosniff(): void
```

##### `resetPreload` <a name="resetPreload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.resetPreload"></a>

```typescript
public resetPreload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput">includeSubdomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput">nosniffInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput">preloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains">includeSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff">nosniff</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload">preload</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubdomainsInput`<sup>Optional</sup> <a name="includeSubdomainsInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomainsInput"></a>

```typescript
public readonly includeSubdomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `nosniffInput`<sup>Optional</sup> <a name="nosniffInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniffInput"></a>

```typescript
public readonly nosniffInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preloadInput`<sup>Optional</sup> <a name="preloadInput" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preloadInput"></a>

```typescript
public readonly preloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubdomains`<sup>Required</sup> <a name="includeSubdomains" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.includeSubdomains"></a>

```typescript
public readonly includeSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `nosniff`<sup>Required</sup> <a name="nosniff" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.nosniff"></a>

```typescript
public readonly nosniff: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preload`<sup>Required</sup> <a name="preload" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.preload"></a>

```typescript
public readonly preload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZoneSettingsOverrideSettingsSecurityHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSettingsOverride.ZoneSettingsOverrideSettingsSecurityHeader">ZoneSettingsOverrideSettingsSecurityHeader</a>

---



