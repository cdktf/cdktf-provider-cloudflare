# `accountDnsSettings` Submodule <a name="`accountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettings <a name="AccountDnsSettings" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

new accountDnsSettings.AccountDnsSettings(scope: Construct, id: string, config: AccountDnsSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults">putZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults">resetZoneDefaults</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putZoneDefaults` <a name="putZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults"></a>

```typescript
public putZoneDefaults(value: AccountDnsSettingsZoneDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `resetZoneDefaults` <a name="resetZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults"></a>

```typescript
public resetZoneDefaults(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

accountDnsSettings.AccountDnsSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

accountDnsSettings.AccountDnsSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

accountDnsSettings.AccountDnsSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

accountDnsSettings.AccountDnsSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput">zoneDefaultsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneDefaults`<sup>Required</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults"></a>

```typescript
public readonly zoneDefaults: AccountDnsSettingsZoneDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `zoneDefaultsInput`<sup>Optional</sup> <a name="zoneDefaultsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput"></a>

```typescript
public readonly zoneDefaultsInput: IResolvable | AccountDnsSettingsZoneDefaults;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsConfig <a name="AccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

const accountDnsSettingsConfig: accountDnsSettings.AccountDnsSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults">zoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `zoneDefaults`<sup>Optional</sup> <a name="zoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults"></a>

```typescript
public readonly zoneDefaults: AccountDnsSettingsZoneDefaults;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

### AccountDnsSettingsZoneDefaults <a name="AccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

const accountDnsSettingsZoneDefaults: accountDnsSettings.AccountDnsSettingsZoneDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames">flattenAllCnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns">foundationDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider">multiProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl">nsTtl</a></code> | <code>number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides">secondaryOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode">zoneMode</a></code> | <code>string</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```typescript
public readonly flattenAllCnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns"></a>

```typescript
public readonly foundationDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns"></a>

```typescript
public readonly internalDns: AccountDnsSettingsZoneDefaultsInternalDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider"></a>

```typescript
public readonly multiProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers"></a>

```typescript
public readonly nameservers: AccountDnsSettingsZoneDefaultsNameservers;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl"></a>

```typescript
public readonly nsTtl: number;
```

- *Type:* number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```typescript
public readonly secondaryOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa"></a>

```typescript
public readonly soa: AccountDnsSettingsZoneDefaultsSoa;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode"></a>

```typescript
public readonly zoneMode: string;
```

- *Type:* string

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

### AccountDnsSettingsZoneDefaultsInternalDns <a name="AccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

const accountDnsSettingsZoneDefaultsInternalDns: accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">referenceZoneId</a></code> | <code>string</code> | The ID of the zone to fallback to. |

---

##### `referenceZoneId`<sup>Optional</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```typescript
public readonly referenceZoneId: string;
```

- *Type:* string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

### AccountDnsSettingsZoneDefaultsNameservers <a name="AccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

const accountDnsSettingsZoneDefaultsNameservers: accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type">type</a></code> | <code>string</code> | Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant". |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

### AccountDnsSettingsZoneDefaultsSoa <a name="AccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

const accountDnsSettingsZoneDefaultsSoa: accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire">expire</a></code> | <code>number</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl">minTtl</a></code> | <code>number</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname">mname</a></code> | <code>string</code> | The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh">refresh</a></code> | <code>number</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry">retry</a></code> | <code>number</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname">rname</a></code> | <code>string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl">ttl</a></code> | <code>number</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

##### `minTtl`<sup>Optional</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

##### `mname`<sup>Optional</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname"></a>

```typescript
public readonly mname: string;
```

- *Type:* string

The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

##### `refresh`<sup>Optional</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh"></a>

```typescript
public readonly refresh: number;
```

- *Type:* number

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

##### `rname`<sup>Optional</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname"></a>

```typescript
public readonly rname: string;
```

- *Type:* string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="AccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

new accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">resetReferenceZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceZoneId` <a name="resetReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```typescript
public resetReferenceZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">referenceZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceZoneIdInput`<sup>Optional</sup> <a name="referenceZoneIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```typescript
public readonly referenceZoneIdInput: string;
```

- *Type:* string

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```typescript
public readonly referenceZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountDnsSettingsZoneDefaultsInternalDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---


### AccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="AccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

new accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountDnsSettingsZoneDefaultsNameservers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---


### AccountDnsSettingsZoneDefaultsOutputReference <a name="AccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

new accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns">putInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">resetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns">resetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns">resetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider">resetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl">resetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">resetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa">resetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode">resetZoneMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInternalDns` <a name="putInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```typescript
public putInternalDns(value: AccountDnsSettingsZoneDefaultsInternalDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```typescript
public putNameservers(value: AccountDnsSettingsZoneDefaultsNameservers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `putSoa` <a name="putSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```typescript
public putSoa(value: AccountDnsSettingsZoneDefaultsSoa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `resetFlattenAllCnames` <a name="resetFlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```typescript
public resetFlattenAllCnames(): void
```

##### `resetFoundationDns` <a name="resetFoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```typescript
public resetFoundationDns(): void
```

##### `resetInternalDns` <a name="resetInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```typescript
public resetInternalDns(): void
```

##### `resetMultiProvider` <a name="resetMultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```typescript
public resetMultiProvider(): void
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```typescript
public resetNameservers(): void
```

##### `resetNsTtl` <a name="resetNsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```typescript
public resetNsTtl(): void
```

##### `resetSecondaryOverrides` <a name="resetSecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```typescript
public resetSecondaryOverrides(): void
```

##### `resetSoa` <a name="resetSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```typescript
public resetSoa(): void
```

##### `resetZoneMode` <a name="resetZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```typescript
public resetZoneMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">flattenAllCnamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">foundationDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">internalDnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">multiProviderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">nsTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">secondaryOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput">soaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">zoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">flattenAllCnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">foundationDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">multiProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">nsTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">secondaryOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">zoneMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```typescript
public readonly internalDns: AccountDnsSettingsZoneDefaultsInternalDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: AccountDnsSettingsZoneDefaultsNameserversOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```typescript
public readonly soa: AccountDnsSettingsZoneDefaultsSoaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `flattenAllCnamesInput`<sup>Optional</sup> <a name="flattenAllCnamesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```typescript
public readonly flattenAllCnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `foundationDnsInput`<sup>Optional</sup> <a name="foundationDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```typescript
public readonly foundationDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalDnsInput`<sup>Optional</sup> <a name="internalDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```typescript
public readonly internalDnsInput: IResolvable | AccountDnsSettingsZoneDefaultsInternalDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `multiProviderInput`<sup>Optional</sup> <a name="multiProviderInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```typescript
public readonly multiProviderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: IResolvable | AccountDnsSettingsZoneDefaultsNameservers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `nsTtlInput`<sup>Optional</sup> <a name="nsTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```typescript
public readonly nsTtlInput: number;
```

- *Type:* number

---

##### `secondaryOverridesInput`<sup>Optional</sup> <a name="secondaryOverridesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```typescript
public readonly secondaryOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```typescript
public readonly soaInput: IResolvable | AccountDnsSettingsZoneDefaultsSoa;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `zoneModeInput`<sup>Optional</sup> <a name="zoneModeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```typescript
public readonly zoneModeInput: string;
```

- *Type:* string

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```typescript
public readonly flattenAllCnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```typescript
public readonly foundationDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```typescript
public readonly multiProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```typescript
public readonly nsTtl: number;
```

- *Type:* number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```typescript
public readonly secondaryOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```typescript
public readonly zoneMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountDnsSettingsZoneDefaults;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---


### AccountDnsSettingsZoneDefaultsSoaOutputReference <a name="AccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```typescript
import { accountDnsSettings } from '@cdktf/provider-cloudflare'

new accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire">resetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl">resetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname">resetMname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh">resetRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname">resetRname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpire` <a name="resetExpire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetExpire"></a>

```typescript
public resetExpire(): void
```

##### `resetMinTtl` <a name="resetMinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMinTtl"></a>

```typescript
public resetMinTtl(): void
```

##### `resetMname` <a name="resetMname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetMname"></a>

```typescript
public resetMname(): void
```

##### `resetRefresh` <a name="resetRefresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRefresh"></a>

```typescript
public resetRefresh(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetRname` <a name="resetRname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetRname"></a>

```typescript
public resetRname(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">expireInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">mnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">refreshInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">retryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">rnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">expire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">mname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">refresh</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">retry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">rname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```typescript
public readonly expireInput: number;
```

- *Type:* number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```typescript
public readonly minTtlInput: number;
```

- *Type:* number

---

##### `mnameInput`<sup>Optional</sup> <a name="mnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```typescript
public readonly mnameInput: string;
```

- *Type:* string

---

##### `refreshInput`<sup>Optional</sup> <a name="refreshInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```typescript
public readonly refreshInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: number;
```

- *Type:* number

---

##### `rnameInput`<sup>Optional</sup> <a name="rnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```typescript
public readonly rnameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```typescript
public readonly mname: string;
```

- *Type:* string

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```typescript
public readonly refresh: number;
```

- *Type:* number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```typescript
public readonly rname: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountDnsSettingsZoneDefaultsSoa;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---



