# `dataCloudflareRulesets` Submodule <a name="`dataCloudflareRulesets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareRulesets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareRulesets <a name="DataCloudflareRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets cloudflare_rulesets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesets(scope: Construct, id: string, config?: DataCloudflareRulesetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig">DataCloudflareRulesetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules">resetIncludeRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareRulesetsFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeRules` <a name="resetIncludeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetIncludeRules"></a>

```typescript
public resetIncludeRules(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

dataCloudflareRulesets.DataCloudflareRulesets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareRulesets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareRulesets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareRulesets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareRulesets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets">rulesets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput">includeRulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules">includeRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filter"></a>

```typescript
public readonly filter: DataCloudflareRulesetsFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference">DataCloudflareRulesetsFilterOutputReference</a>

---

##### `rulesets`<sup>Required</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.rulesets"></a>

```typescript
public readonly rulesets: DataCloudflareRulesetsRulesetsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList">DataCloudflareRulesetsRulesetsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.filterInput"></a>

```typescript
public readonly filterInput: DataCloudflareRulesetsFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeRulesInput`<sup>Optional</sup> <a name="includeRulesInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRulesInput"></a>

```typescript
public readonly includeRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeRules`<sup>Required</sup> <a name="includeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.includeRules"></a>

```typescript
public readonly includeRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareRulesetsConfig <a name="DataCloudflareRulesetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsConfig: dataCloudflareRulesets.DataCloudflareRulesetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules">includeRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include rule data in response. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#account_id DataCloudflareRulesets#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareRulesetsFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#filter DataCloudflareRulesets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeRules`<sup>Optional</sup> <a name="includeRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.includeRules"></a>

```typescript
public readonly includeRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include rule data in response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#include_rules DataCloudflareRulesets#include_rules}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. Must provide only one of `zone_id`, `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#zone_id DataCloudflareRulesets#zone_id}

---

### DataCloudflareRulesetsFilter <a name="DataCloudflareRulesetsFilter" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsFilter: dataCloudflareRulesets.DataCloudflareRulesetsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id">id</a></code> | <code>string</code> | The ID of the Ruleset to target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind">kind</a></code> | <code>string</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name">name</a></code> | <code>string</code> | Name of the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase">phase</a></code> | <code>string</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version">version</a></code> | <code>string</code> | Version of the ruleset to filter on. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the Ruleset to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#id DataCloudflareRulesets#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `zone`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#kind DataCloudflareRulesets#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#name DataCloudflareRulesets#name}

---

##### `phase`<sup>Optional</sup> <a name="phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_config_settings`, `http_custom_errors`, `http_log_custom_fields`, `http_ratelimit`, `http_request_cache_settings`, `http_request_dynamic_redirect`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_origin`, `http_request_redirect`, `http_request_sanitize`, `http_request_sbfm`, `http_request_transform`, `http_response_compression`, `http_response_firewall_managed`, `http_response_headers_transform`, `magic_transit`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#phase DataCloudflareRulesets#phase}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the ruleset to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/data-sources/rulesets#version DataCloudflareRulesets#version}

---

### DataCloudflareRulesetsRulesets <a name="DataCloudflareRulesetsRulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesets: dataCloudflareRulesets.DataCloudflareRulesetsRulesets = { ... }
```


### DataCloudflareRulesetsRulesetsRules <a name="DataCloudflareRulesetsRulesetsRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRules: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParameters <a name="DataCloudflareRulesetsRulesetsRulesActionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParameters: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominify <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersAutominify: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKey: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValue <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersFromValue: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersHeaders <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersHeaders: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersMatchedData: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOrigin <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersOrigin: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverrides <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersOverrides: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersResponse <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponse" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersResponse: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStale <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersServeStale: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersSni <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersSni: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUri <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersUri: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPath <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersUriPath: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath = { ... }
```


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesActionParametersUriQuery: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery = { ... }
```


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesExposedCredentialCheck: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck = { ... }
```


### DataCloudflareRulesetsRulesetsRulesLogging <a name="DataCloudflareRulesetsRulesetsRulesLogging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesLogging: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging = { ... }
```


### DataCloudflareRulesetsRulesetsRulesRatelimit <a name="DataCloudflareRulesetsRulesetsRulesRatelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

const dataCloudflareRulesetsRulesetsRulesRatelimit: dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareRulesetsFilterOutputReference <a name="DataCloudflareRulesetsFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase">resetPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPhase` <a name="resetPhase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetPhase"></a>

```typescript
public resetPhase(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput">phaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phaseInput`<sup>Optional</sup> <a name="phaseInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phaseInput"></a>

```typescript
public readonly phaseInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsFilter">DataCloudflareRulesetsFilter</a>

---


### DataCloudflareRulesetsRulesetsList <a name="DataCloudflareRulesetsRulesetsList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsOutputReference <a name="DataCloudflareRulesetsRulesetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase">phase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.phase"></a>

```typescript
public readonly phase: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.rules"></a>

```typescript
public readonly rules: DataCloudflareRulesetsRulesetsRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList">DataCloudflareRulesetsRulesetsRulesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesets;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesets">DataCloudflareRulesetsRulesets</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css">css</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html">html</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js">js</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.css"></a>

```typescript
public readonly css: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.html"></a>

```typescript
public readonly html: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.js"></a>

```typescript
public readonly js: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersAutominify;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominify">DataCloudflareRulesetsRulesetsRulesActionParametersAutominify</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default">default</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">checkPresence</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains">contains</a></code> | <code>cdktf.StringListMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">excludeOrigin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkPresence`<sup>Required</sup> <a name="checkPresence" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```typescript
public readonly checkPresence: string[];
```

- *Type:* string[]

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.contains"></a>

```typescript
public readonly contains: StringListMap;
```

- *Type:* cdktf.StringListMap

---

##### `excludeOrigin`<sup>Required</sup> <a name="excludeOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```typescript
public readonly excludeOrigin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">resolved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```typescript
public readonly resolved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHost</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```typescript
public readonly cookie: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyCookieList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```typescript
public readonly header: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHeaderList</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```typescript
public readonly host: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyHostList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```typescript
public readonly queryString: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```typescript
public readonly user: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">deviceType</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">geo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">lang</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```typescript
public readonly geo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```typescript
public readonly lang: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyUser</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">cacheByDeviceType</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">cacheDeceptionArmor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey">customKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">ignoreQueryStringsOrder</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheByDeviceType`<sup>Required</sup> <a name="cacheByDeviceType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```typescript
public readonly cacheByDeviceType: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cacheDeceptionArmor`<sup>Required</sup> <a name="cacheDeceptionArmor" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```typescript
public readonly cacheDeceptionArmor: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `customKey`<sup>Required</sup> <a name="customKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```typescript
public readonly customKey: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyCustomKeyList</a>

---

##### `ignoreQueryStringsOrder`<sup>Required</sup> <a name="ignoreQueryStringsOrder" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```typescript
public readonly ignoreQueryStringsOrder: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKey</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.eligible">eligible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.minimumFileSize">minimumFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eligible`<sup>Required</sup> <a name="eligible" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.eligible"></a>

```typescript
public readonly eligible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumFileSize`<sup>Required</sup> <a name="minimumFileSize" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.minimumFileSize"></a>

```typescript
public readonly minimumFileSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserve</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default">default</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">statusCodeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```typescript
public readonly default: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `statusCodeTtl`<sup>Required</sup> <a name="statusCodeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```typescript
public readonly statusCodeTtl: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">statusCodeRange</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `statusCodeRange`<sup>Required</sup> <a name="statusCodeRange" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```typescript
public readonly statusCodeRange: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">from</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">to</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```typescript
public readonly from: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```typescript
public readonly to: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStruct</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString">preserveQueryString</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl">targetUrl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preserveQueryString`<sup>Required</sup> <a name="preserveQueryString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```typescript
public readonly preserveQueryString: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersFromValue;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValue">DataCloudflareRulesetsRulesetsRulesActionParametersFromValue</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueTargetUrl</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersHeaders;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeaders">DataCloudflareRulesetsRulesetsRulesActionParametersHeaders</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedData</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOrigin">DataCloudflareRulesetsRulesetsRulesActionParametersOrigin</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.additionalCacheablePorts">additionalCacheablePorts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites">automaticHttpsRewrites</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify">autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic">bic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl">browserTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache">cache</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey">cacheKey</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheReserve">cacheReserve</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields">cookieFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps">disableApps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun">disableRailgun</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz">disableZaraz</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl">edgeTtl</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation">emailObfuscation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList">fromList</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue">fromValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection">hotlinkProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment">increment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData">matchedData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage">mirage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption">opportunisticEncryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originCacheControl">originCacheControl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru">originErrorPagePassthru</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases">phases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish">polish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.readTimeout">readTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields">requestFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags">respectStrongEtags</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields">responseFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader">rocketLoader</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules">rules</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset">ruleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets">rulesets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes">serverSideExcludes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale">serveStale</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl">ssl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg">sxg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalCacheablePorts`<sup>Required</sup> <a name="additionalCacheablePorts" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.additionalCacheablePorts"></a>

```typescript
public readonly additionalCacheablePorts: number[];
```

- *Type:* number[]

---

##### `automaticHttpsRewrites`<sup>Required</sup> <a name="automaticHttpsRewrites" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```typescript
public readonly automaticHttpsRewrites: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autominify`<sup>Required</sup> <a name="autominify" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.autominify"></a>

```typescript
public readonly autominify: DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList">DataCloudflareRulesetsRulesetsRulesActionParametersAutominifyList</a>

---

##### `bic`<sup>Required</sup> <a name="bic" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.bic"></a>

```typescript
public readonly bic: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `browserTtl`<sup>Required</sup> <a name="browserTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.browserTtl"></a>

```typescript
public readonly browserTtl: DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersBrowserTtlList</a>

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cache"></a>

```typescript
public readonly cache: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cacheKey`<sup>Required</sup> <a name="cacheKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheKey"></a>

```typescript
public readonly cacheKey: DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheKeyList</a>

---

##### `cacheReserve`<sup>Required</sup> <a name="cacheReserve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cacheReserve"></a>

```typescript
public readonly cacheReserve: DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList">DataCloudflareRulesetsRulesetsRulesActionParametersCacheReserveList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `cookieFields`<sup>Required</sup> <a name="cookieFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.cookieFields"></a>

```typescript
public readonly cookieFields: string[];
```

- *Type:* string[]

---

##### `disableApps`<sup>Required</sup> <a name="disableApps" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableApps"></a>

```typescript
public readonly disableApps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disableRailgun`<sup>Required</sup> <a name="disableRailgun" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableRailgun"></a>

```typescript
public readonly disableRailgun: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disableZaraz`<sup>Required</sup> <a name="disableZaraz" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.disableZaraz"></a>

```typescript
public readonly disableZaraz: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `edgeTtl`<sup>Required</sup> <a name="edgeTtl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.edgeTtl"></a>

```typescript
public readonly edgeTtl: DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList">DataCloudflareRulesetsRulesetsRulesActionParametersEdgeTtlList</a>

---

##### `emailObfuscation`<sup>Required</sup> <a name="emailObfuscation" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.emailObfuscation"></a>

```typescript
public readonly emailObfuscation: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fromList`<sup>Required</sup> <a name="fromList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromList"></a>

```typescript
public readonly fromList: DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList">DataCloudflareRulesetsRulesetsRulesActionParametersFromListStructList</a>

---

##### `fromValue`<sup>Required</sup> <a name="fromValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.fromValue"></a>

```typescript
public readonly fromValue: DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList">DataCloudflareRulesetsRulesetsRulesActionParametersFromValueList</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.headers"></a>

```typescript
public readonly headers: DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList">DataCloudflareRulesetsRulesetsRulesActionParametersHeadersList</a>

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `hotlinkProtection`<sup>Required</sup> <a name="hotlinkProtection" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```typescript
public readonly hotlinkProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `increment`<sup>Required</sup> <a name="increment" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.increment"></a>

```typescript
public readonly increment: number;
```

- *Type:* number

---

##### `matchedData`<sup>Required</sup> <a name="matchedData" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.matchedData"></a>

```typescript
public readonly matchedData: DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList">DataCloudflareRulesetsRulesetsRulesActionParametersMatchedDataList</a>

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.mirage"></a>

```typescript
public readonly mirage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `opportunisticEncryption`<sup>Required</sup> <a name="opportunisticEncryption" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```typescript
public readonly opportunisticEncryption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.origin"></a>

```typescript
public readonly origin: DataCloudflareRulesetsRulesetsRulesActionParametersOriginList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOriginList">DataCloudflareRulesetsRulesetsRulesActionParametersOriginList</a>

---

##### `originCacheControl`<sup>Required</sup> <a name="originCacheControl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originCacheControl"></a>

```typescript
public readonly originCacheControl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `originErrorPagePassthru`<sup>Required</sup> <a name="originErrorPagePassthru" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```typescript
public readonly originErrorPagePassthru: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList</a>

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.phases"></a>

```typescript
public readonly phases: string[];
```

- *Type:* string[]

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.polish"></a>

```typescript
public readonly polish: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `readTimeout`<sup>Required</sup> <a name="readTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.readTimeout"></a>

```typescript
public readonly readTimeout: number;
```

- *Type:* number

---

##### `requestFields`<sup>Required</sup> <a name="requestFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.requestFields"></a>

```typescript
public readonly requestFields: string[];
```

- *Type:* string[]

---

##### `respectStrongEtags`<sup>Required</sup> <a name="respectStrongEtags" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```typescript
public readonly respectStrongEtags: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.response"></a>

```typescript
public readonly response: DataCloudflareRulesetsRulesetsRulesActionParametersResponseList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList">DataCloudflareRulesetsRulesetsRulesActionParametersResponseList</a>

---

##### `responseFields`<sup>Required</sup> <a name="responseFields" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.responseFields"></a>

```typescript
public readonly responseFields: string[];
```

- *Type:* string[]

---

##### `rocketLoader`<sup>Required</sup> <a name="rocketLoader" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rocketLoader"></a>

```typescript
public readonly rocketLoader: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rules"></a>

```typescript
public readonly rules: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ruleset"></a>

```typescript
public readonly ruleset: string;
```

- *Type:* string

---

##### `rulesets`<sup>Required</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.rulesets"></a>

```typescript
public readonly rulesets: string[];
```

- *Type:* string[]

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `serverSideExcludes`<sup>Required</sup> <a name="serverSideExcludes" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```typescript
public readonly serverSideExcludes: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serveStale`<sup>Required</sup> <a name="serveStale" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.serveStale"></a>

```typescript
public readonly serveStale: DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList">DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList</a>

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sni"></a>

```typescript
public readonly sni: DataCloudflareRulesetsRulesetsRulesActionParametersSniList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList">DataCloudflareRulesetsRulesetsRulesActionParametersSniList</a>

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.ssl"></a>

```typescript
public readonly ssl: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `sxg`<sup>Required</sup> <a name="sxg" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.sxg"></a>

```typescript
public readonly sxg: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.uri"></a>

```typescript
public readonly uri: DataCloudflareRulesetsRulesetsRulesActionParametersUriList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList">DataCloudflareRulesetsRulesetsRulesActionParametersUriList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParameters;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParameters">DataCloudflareRulesetsRulesetsRulesActionParameters</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategories</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories">categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.categories"></a>

```typescript
public readonly categories: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesCategoriesList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.rules"></a>

```typescript
public readonly rules: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList</a>

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersOverrides;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverrides">DataCloudflareRulesetsRulesetsRulesActionParametersOverrides</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">scoreThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">sensitivityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scoreThreshold`<sup>Required</sup> <a name="scoreThreshold" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```typescript
public readonly scoreThreshold: number;
```

- *Type:* number

---

##### `sensitivityLevel`<sup>Required</sup> <a name="sensitivityLevel" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```typescript
public readonly sensitivityLevel: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules">DataCloudflareRulesetsRulesetsRulesActionParametersOverridesRules</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersResponse;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersResponse">DataCloudflareRulesetsRulesetsRulesActionParametersResponse</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">disableStaleWhileUpdating</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableStaleWhileUpdating`<sup>Required</sup> <a name="disableStaleWhileUpdating" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```typescript
public readonly disableStaleWhileUpdating: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersServeStale;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersServeStale">DataCloudflareRulesetsRulesetsRulesActionParametersServeStale</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSniOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersSni;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersSni">DataCloudflareRulesetsRulesetsRulesActionParametersSni</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin">origin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.origin"></a>

```typescript
public readonly origin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.path"></a>

```typescript
public readonly path: DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList">DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.query"></a>

```typescript
public readonly query: DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList">DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersUri;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUri">DataCloudflareRulesetsRulesetsRulesActionParametersUri</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersUriPath;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriPath">DataCloudflareRulesetsRulesetsRulesActionParametersUriPath</a>

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference <a name="DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery">DataCloudflareRulesetsRulesetsRulesActionParametersUriQuery</a>

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference <a name="DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression">passwordExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression">usernameExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordExpression`<sup>Required</sup> <a name="passwordExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```typescript
public readonly passwordExpression: string;
```

- *Type:* string

---

##### `usernameExpression`<sup>Required</sup> <a name="usernameExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```typescript
public readonly usernameExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheck</a>

---


### DataCloudflareRulesetsRulesetsRulesList <a name="DataCloudflareRulesetsRulesetsRulesList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesLoggingList <a name="DataCloudflareRulesetsRulesetsRulesLoggingList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesLoggingOutputReference <a name="DataCloudflareRulesetsRulesetsRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLogging">DataCloudflareRulesetsRulesetsRulesLogging</a>

---


### DataCloudflareRulesetsRulesetsRulesOutputReference <a name="DataCloudflareRulesetsRulesetsRulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters">actionParameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck">exposedCredentialCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `actionParameters`<sup>Required</sup> <a name="actionParameters" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.actionParameters"></a>

```typescript
public readonly actionParameters: DataCloudflareRulesetsRulesetsRulesActionParametersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesActionParametersList">DataCloudflareRulesetsRulesetsRulesActionParametersList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `exposedCredentialCheck`<sup>Required</sup> <a name="exposedCredentialCheck" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.exposedCredentialCheck"></a>

```typescript
public readonly exposedCredentialCheck: DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList">DataCloudflareRulesetsRulesetsRulesExposedCredentialCheckList</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.logging"></a>

```typescript
public readonly logging: DataCloudflareRulesetsRulesetsRulesLoggingList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesLoggingList">DataCloudflareRulesetsRulesetsRulesLoggingList</a>

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ratelimit"></a>

```typescript
public readonly ratelimit: DataCloudflareRulesetsRulesetsRulesRatelimitList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList">DataCloudflareRulesetsRulesetsRulesRatelimitList</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRules;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRules">DataCloudflareRulesetsRulesetsRules</a>

---


### DataCloudflareRulesetsRulesetsRulesRatelimitList <a name="DataCloudflareRulesetsRulesetsRulesRatelimitList" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get"></a>

```typescript
public get(index: number): DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference <a name="DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer"></a>

```typescript
import { dataCloudflareRulesets } from '@cdktf/provider-cloudflare'

new dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics">characteristics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression">countingExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout">mitigationTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod">requestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin">requestsToOrigin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod">scorePerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName">scoreResponseHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characteristics`<sup>Required</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.characteristics"></a>

```typescript
public readonly characteristics: string[];
```

- *Type:* string[]

---

##### `countingExpression`<sup>Required</sup> <a name="countingExpression" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.countingExpression"></a>

```typescript
public readonly countingExpression: string;
```

- *Type:* string

---

##### `mitigationTimeout`<sup>Required</sup> <a name="mitigationTimeout" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```typescript
public readonly mitigationTimeout: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `requestsPerPeriod`<sup>Required</sup> <a name="requestsPerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```typescript
public readonly requestsPerPeriod: number;
```

- *Type:* number

---

##### `requestsToOrigin`<sup>Required</sup> <a name="requestsToOrigin" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```typescript
public readonly requestsToOrigin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `scorePerPeriod`<sup>Required</sup> <a name="scorePerPeriod" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```typescript
public readonly scorePerPeriod: number;
```

- *Type:* number

---

##### `scoreResponseHeaderName`<sup>Required</sup> <a name="scoreResponseHeaderName" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```typescript
public readonly scoreResponseHeaderName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareRulesetsRulesetsRulesRatelimit;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareRulesets.DataCloudflareRulesetsRulesetsRulesRatelimit">DataCloudflareRulesetsRulesetsRulesRatelimit</a>

---



