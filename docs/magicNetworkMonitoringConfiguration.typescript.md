# `magicNetworkMonitoringConfiguration` Submodule <a name="`magicNetworkMonitoringConfiguration` Submodule" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringConfiguration <a name="MagicNetworkMonitoringConfiguration" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration(scope: Construct, id: string, config: MagicNetworkMonitoringConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig">MagicNetworkMonitoringConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig">MagicNetworkMonitoringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices">putWarpDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetDefaultSampling">resetDefaultSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetRouterIps">resetRouterIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetWarpDevices">resetWarpDevices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putWarpDevices` <a name="putWarpDevices" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices"></a>

```typescript
public putWarpDevices(value: IResolvable | MagicNetworkMonitoringConfigurationWarpDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]

---

##### `resetDefaultSampling` <a name="resetDefaultSampling" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetDefaultSampling"></a>

```typescript
public resetDefaultSampling(): void
```

##### `resetRouterIps` <a name="resetRouterIps" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetRouterIps"></a>

```typescript
public resetRouterIps(): void
```

##### `resetWarpDevices` <a name="resetWarpDevices" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetWarpDevices"></a>

```typescript
public resetWarpDevices(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicNetworkMonitoringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevices">warpDevices</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList">MagicNetworkMonitoringConfigurationWarpDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSamplingInput">defaultSamplingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIpsInput">routerIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevicesInput">warpDevicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSampling">defaultSampling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIps">routerIps</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `warpDevices`<sup>Required</sup> <a name="warpDevices" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevices"></a>

```typescript
public readonly warpDevices: MagicNetworkMonitoringConfigurationWarpDevicesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList">MagicNetworkMonitoringConfigurationWarpDevicesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `defaultSamplingInput`<sup>Optional</sup> <a name="defaultSamplingInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSamplingInput"></a>

```typescript
public readonly defaultSamplingInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routerIpsInput`<sup>Optional</sup> <a name="routerIpsInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIpsInput"></a>

```typescript
public readonly routerIpsInput: string[];
```

- *Type:* string[]

---

##### `warpDevicesInput`<sup>Optional</sup> <a name="warpDevicesInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevicesInput"></a>

```typescript
public readonly warpDevicesInput: IResolvable | MagicNetworkMonitoringConfigurationWarpDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `defaultSampling`<sup>Required</sup> <a name="defaultSampling" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSampling"></a>

```typescript
public readonly defaultSampling: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerIps`<sup>Required</sup> <a name="routerIps" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIps"></a>

```typescript
public readonly routerIps: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringConfigurationConfig <a name="MagicNetworkMonitoringConfigurationConfig" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.Initializer"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

const magicNetworkMonitoringConfigurationConfig: magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.name">name</a></code> | <code>string</code> | The account name. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.defaultSampling">defaultSampling</a></code> | <code>number</code> | Fallback sampling rate of flow messages being sent in packets per second. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.routerIps">routerIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.warpDevices">warpDevices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}

---

##### `defaultSampling`<sup>Optional</sup> <a name="defaultSampling" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.defaultSampling"></a>

```typescript
public readonly defaultSampling: number;
```

- *Type:* number

Fallback sampling rate of flow messages being sent in packets per second.

This should match the packet sampling rate configured on the router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#default_sampling MagicNetworkMonitoringConfiguration#default_sampling}

---

##### `routerIps`<sup>Optional</sup> <a name="routerIps" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.routerIps"></a>

```typescript
public readonly routerIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}.

---

##### `warpDevices`<sup>Optional</sup> <a name="warpDevices" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.warpDevices"></a>

```typescript
public readonly warpDevices: IResolvable | MagicNetworkMonitoringConfigurationWarpDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}.

---

### MagicNetworkMonitoringConfigurationWarpDevices <a name="MagicNetworkMonitoringConfigurationWarpDevices" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.Initializer"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

const magicNetworkMonitoringConfigurationWarpDevices: magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.id">id</a></code> | <code>string</code> | Unique identifier for the warp device. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.name">name</a></code> | <code>string</code> | Name of the warp device. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.routerIp">routerIp</a></code> | <code>string</code> | IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the warp device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#id MagicNetworkMonitoringConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the warp device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}

---

##### `routerIp`<sup>Required</sup> <a name="routerIp" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.routerIp"></a>

```typescript
public readonly routerIp: string;
```

- *Type:* string

IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/magic_network_monitoring_configuration#router_ip MagicNetworkMonitoringConfiguration#router_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicNetworkMonitoringConfigurationWarpDevicesList <a name="MagicNetworkMonitoringConfigurationWarpDevicesList" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get"></a>

```typescript
public get(index: number): MagicNetworkMonitoringConfigurationWarpDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicNetworkMonitoringConfigurationWarpDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>[]

---


### MagicNetworkMonitoringConfigurationWarpDevicesOutputReference <a name="MagicNetworkMonitoringConfigurationWarpDevicesOutputReference" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer"></a>

```typescript
import { magicNetworkMonitoringConfiguration } from '@cdktf/provider-cloudflare'

new magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIpInput">routerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp">routerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routerIpInput`<sup>Optional</sup> <a name="routerIpInput" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIpInput"></a>

```typescript
public readonly routerIpInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerIp`<sup>Required</sup> <a name="routerIp" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp"></a>

```typescript
public readonly routerIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MagicNetworkMonitoringConfigurationWarpDevices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>

---



