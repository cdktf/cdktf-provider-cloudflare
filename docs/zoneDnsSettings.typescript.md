# `zoneDnsSettings` Submodule <a name="`zoneDnsSettings` Submodule" id="@cdktf/provider-cloudflare.zoneDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnsSettings <a name="ZoneDnsSettings" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

new zoneDnsSettings.ZoneDnsSettings(scope: Construct, id: string, config: ZoneDnsSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig">ZoneDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig">ZoneDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns">putInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames">resetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns">resetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns">resetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider">resetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl">resetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides">resetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa">resetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode">resetZoneMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInternalDns` <a name="putInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns"></a>

```typescript
public putInternalDns(value: ZoneDnsSettingsInternalDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers"></a>

```typescript
public putNameservers(value: ZoneDnsSettingsNameservers): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---

##### `putSoa` <a name="putSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa"></a>

```typescript
public putSoa(value: ZoneDnsSettingsSoa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---

##### `resetFlattenAllCnames` <a name="resetFlattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames"></a>

```typescript
public resetFlattenAllCnames(): void
```

##### `resetFoundationDns` <a name="resetFoundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns"></a>

```typescript
public resetFoundationDns(): void
```

##### `resetInternalDns` <a name="resetInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns"></a>

```typescript
public resetInternalDns(): void
```

##### `resetMultiProvider` <a name="resetMultiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider"></a>

```typescript
public resetMultiProvider(): void
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers"></a>

```typescript
public resetNameservers(): void
```

##### `resetNsTtl` <a name="resetNsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl"></a>

```typescript
public resetNsTtl(): void
```

##### `resetSecondaryOverrides` <a name="resetSecondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides"></a>

```typescript
public resetSecondaryOverrides(): void
```

##### `resetSoa` <a name="resetSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa"></a>

```typescript
public resetSoa(): void
```

##### `resetZoneMode` <a name="resetZoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode"></a>

```typescript
public resetZoneMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

zoneDnsSettings.ZoneDnsSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

zoneDnsSettings.ZoneDnsSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

zoneDnsSettings.ZoneDnsSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

zoneDnsSettings.ZoneDnsSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZoneDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZoneDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZoneDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput">flattenAllCnamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput">foundationDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput">internalDnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput">multiProviderInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput">nameserversInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput">nsTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput">secondaryOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput">soaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput">zoneModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames">flattenAllCnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns">foundationDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider">multiProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl">nsTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides">secondaryOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode">zoneMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns"></a>

```typescript
public readonly internalDns: ZoneDnsSettingsInternalDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers"></a>

```typescript
public readonly nameservers: ZoneDnsSettingsNameserversOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa"></a>

```typescript
public readonly soa: ZoneDnsSettingsSoaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a>

---

##### `flattenAllCnamesInput`<sup>Optional</sup> <a name="flattenAllCnamesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput"></a>

```typescript
public readonly flattenAllCnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `foundationDnsInput`<sup>Optional</sup> <a name="foundationDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput"></a>

```typescript
public readonly foundationDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalDnsInput`<sup>Optional</sup> <a name="internalDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput"></a>

```typescript
public readonly internalDnsInput: IResolvable | ZoneDnsSettingsInternalDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---

##### `multiProviderInput`<sup>Optional</sup> <a name="multiProviderInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput"></a>

```typescript
public readonly multiProviderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: IResolvable | ZoneDnsSettingsNameservers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---

##### `nsTtlInput`<sup>Optional</sup> <a name="nsTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput"></a>

```typescript
public readonly nsTtlInput: number;
```

- *Type:* number

---

##### `secondaryOverridesInput`<sup>Optional</sup> <a name="secondaryOverridesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput"></a>

```typescript
public readonly secondaryOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput"></a>

```typescript
public readonly soaInput: IResolvable | ZoneDnsSettingsSoa;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneModeInput`<sup>Optional</sup> <a name="zoneModeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput"></a>

```typescript
public readonly zoneModeInput: string;
```

- *Type:* string

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames"></a>

```typescript
public readonly flattenAllCnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns"></a>

```typescript
public readonly foundationDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider"></a>

```typescript
public readonly multiProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl"></a>

```typescript
public readonly nsTtl: number;
```

- *Type:* number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides"></a>

```typescript
public readonly secondaryOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode"></a>

```typescript
public readonly zoneMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnsSettingsConfig <a name="ZoneDnsSettingsConfig" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

const zoneDnsSettingsConfig: zoneDnsSettings.ZoneDnsSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames">flattenAllCnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns">foundationDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider">multiProvider</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl">nsTtl</a></code> | <code>number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides">secondaryOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode">zoneMode</a></code> | <code>string</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#zone_id ZoneDnsSettings#zone_id}

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames"></a>

```typescript
public readonly flattenAllCnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#flatten_all_cnames ZoneDnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns"></a>

```typescript
public readonly foundationDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#foundation_dns ZoneDnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns"></a>

```typescript
public readonly internalDns: ZoneDnsSettingsInternalDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#internal_dns ZoneDnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider"></a>

```typescript
public readonly multiProvider: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#multi_provider ZoneDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers"></a>

```typescript
public readonly nameservers: ZoneDnsSettingsNameservers;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#nameservers ZoneDnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl"></a>

```typescript
public readonly nsTtl: number;
```

- *Type:* number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#ns_ttl ZoneDnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides"></a>

```typescript
public readonly secondaryOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#secondary_overrides ZoneDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa"></a>

```typescript
public readonly soa: ZoneDnsSettingsSoa;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#soa ZoneDnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode"></a>

```typescript
public readonly zoneMode: string;
```

- *Type:* string

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#zone_mode ZoneDnsSettings#zone_mode}

---

### ZoneDnsSettingsInternalDns <a name="ZoneDnsSettingsInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

const zoneDnsSettingsInternalDns: zoneDnsSettings.ZoneDnsSettingsInternalDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId">referenceZoneId</a></code> | <code>string</code> | The ID of the zone to fallback to. |

---

##### `referenceZoneId`<sup>Optional</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId"></a>

```typescript
public readonly referenceZoneId: string;
```

- *Type:* string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#reference_zone_id ZoneDnsSettings#reference_zone_id}

---

### ZoneDnsSettingsNameservers <a name="ZoneDnsSettingsNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

const zoneDnsSettingsNameservers: zoneDnsSettings.ZoneDnsSettingsNameservers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet">nsSet</a></code> | <code>number</code> | Configured nameserver set to be used for this zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type">type</a></code> | <code>string</code> | Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone". |

---

##### `nsSet`<sup>Optional</sup> <a name="nsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet"></a>

```typescript
public readonly nsSet: number;
```

- *Type:* number

Configured nameserver set to be used for this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#ns_set ZoneDnsSettings#ns_set}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#type ZoneDnsSettings#type}

---

### ZoneDnsSettingsSoa <a name="ZoneDnsSettingsSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

const zoneDnsSettingsSoa: zoneDnsSettings.ZoneDnsSettingsSoa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire">expire</a></code> | <code>number</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl">minTtl</a></code> | <code>number</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname">mname</a></code> | <code>string</code> | The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh">refresh</a></code> | <code>number</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry">retry</a></code> | <code>number</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname">rname</a></code> | <code>string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl">ttl</a></code> | <code>number</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Optional</sup> <a name="expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#expire ZoneDnsSettings#expire}

---

##### `minTtl`<sup>Optional</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#min_ttl ZoneDnsSettings#min_ttl}

---

##### `mname`<sup>Optional</sup> <a name="mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname"></a>

```typescript
public readonly mname: string;
```

- *Type:* string

The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#mname ZoneDnsSettings#mname}

---

##### `refresh`<sup>Optional</sup> <a name="refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh"></a>

```typescript
public readonly refresh: number;
```

- *Type:* number

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#refresh ZoneDnsSettings#refresh}

---

##### `retry`<sup>Optional</sup> <a name="retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#retry ZoneDnsSettings#retry}

---

##### `rname`<sup>Optional</sup> <a name="rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname"></a>

```typescript
public readonly rname: string;
```

- *Type:* string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#rname ZoneDnsSettings#rname}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zone_dns_settings#ttl ZoneDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneDnsSettingsInternalDnsOutputReference <a name="ZoneDnsSettingsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

new zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId">resetReferenceZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceZoneId` <a name="resetReferenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId"></a>

```typescript
public resetReferenceZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput">referenceZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceZoneIdInput`<sup>Optional</sup> <a name="referenceZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```typescript
public readonly referenceZoneIdInput: string;
```

- *Type:* string

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId"></a>

```typescript
public readonly referenceZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZoneDnsSettingsInternalDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---


### ZoneDnsSettingsNameserversOutputReference <a name="ZoneDnsSettingsNameserversOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

new zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet">resetNsSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsSet` <a name="resetNsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet"></a>

```typescript
public resetNsSet(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput">nsSetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet">nsSet</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsSetInput`<sup>Optional</sup> <a name="nsSetInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput"></a>

```typescript
public readonly nsSetInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `nsSet`<sup>Required</sup> <a name="nsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet"></a>

```typescript
public readonly nsSet: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZoneDnsSettingsNameservers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---


### ZoneDnsSettingsSoaOutputReference <a name="ZoneDnsSettingsSoaOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer"></a>

```typescript
import { zoneDnsSettings } from '@cdktf/provider-cloudflare'

new zoneDnsSettings.ZoneDnsSettingsSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetExpire">resetExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetMinTtl">resetMinTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetMname">resetMname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRefresh">resetRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRetry">resetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRname">resetRname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpire` <a name="resetExpire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetExpire"></a>

```typescript
public resetExpire(): void
```

##### `resetMinTtl` <a name="resetMinTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetMinTtl"></a>

```typescript
public resetMinTtl(): void
```

##### `resetMname` <a name="resetMname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetMname"></a>

```typescript
public resetMname(): void
```

##### `resetRefresh` <a name="resetRefresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRefresh"></a>

```typescript
public resetRefresh(): void
```

##### `resetRetry` <a name="resetRetry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRetry"></a>

```typescript
public resetRetry(): void
```

##### `resetRname` <a name="resetRname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetRname"></a>

```typescript
public resetRname(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput">expireInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput">mnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput">refreshInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput">retryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput">rnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire">expire</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname">mname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh">refresh</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry">retry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname">rname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput"></a>

```typescript
public readonly expireInput: number;
```

- *Type:* number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput"></a>

```typescript
public readonly minTtlInput: number;
```

- *Type:* number

---

##### `mnameInput`<sup>Optional</sup> <a name="mnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput"></a>

```typescript
public readonly mnameInput: string;
```

- *Type:* string

---

##### `refreshInput`<sup>Optional</sup> <a name="refreshInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput"></a>

```typescript
public readonly refreshInput: number;
```

- *Type:* number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: number;
```

- *Type:* number

---

##### `rnameInput`<sup>Optional</sup> <a name="rnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput"></a>

```typescript
public readonly rnameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire"></a>

```typescript
public readonly expire: number;
```

- *Type:* number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl"></a>

```typescript
public readonly minTtl: number;
```

- *Type:* number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname"></a>

```typescript
public readonly mname: string;
```

- *Type:* string

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh"></a>

```typescript
public readonly refresh: number;
```

- *Type:* number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry"></a>

```typescript
public readonly retry: number;
```

- *Type:* number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname"></a>

```typescript
public readonly rname: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZoneDnsSettingsSoa;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---



